import asyncHandler from 'express-async-handler';
import Link from '../model/linkModel.js';

// @desc: display all of the links
// @route: GET /api/links
// @access: Public
const getLinks = asyncHandler(async (req, res) => {
    const link = await Link.find();

    res.status(200).json(link);
});

// @desc: display a link
// @route: GET /api/links/:id
// @access: Public
const getLink = asyncHandler(async (req, res) => {
    const link = await Link.findById(req.params.id);

    // check if the link is available
    if (!link) {
        res.status(400);
        throw new Error('Link not found');
    }

    res.status(200).json(link);
});

// @desc: add a link
// @route: POST /api/links
// @access: Public
const addLink = asyncHandler(async (req, res) => {
    const { title, description, url, type } = req.body;

    // check if all the fields is empty
    if (!title || !description || !url || !type) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    // check if link already exists
    const linkExists = await Link.findOne({ url });

    if (linkExists) {
        res.status(400);
        throw new Error('Link already exists');
    }

    // create a link
    const link = await Link.create({
        title,
        description,
        url,
        type
    });

    res.status(200).json(link);
});

// @desc: update a link
// @route: PUT /api/links/:id
// @access: Public
const updateLink = asyncHandler(async (req, res) => {
    const link = await Link.findById(req.params.id);

    // check if the link is available
    if (!link) {
        res.status(400);
        throw new Error('Link not found');
    }

    const updatedLink = await Link.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedLink);
});

// @desc: delete a link
// @route: DELETE /api/links/:id
// @access: Public
const deleteLink = asyncHandler(async (req, res) => {
    const link = await Link.findById(req.params.id);

    // check if the link is available
    if (!link) {
        res.status(400);
        throw new Error('Link not found');
    }

    await link.deleteOne();

    const { title, _id } = link;

    res.status(200).json({_id, title});
});

export {
    getLinks,
    getLink,
    addLink,
    updateLink,
    deleteLink 
};