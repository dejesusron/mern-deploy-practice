import express from 'express';
import {
    getLinks,
    getLink,
    addLink,
    updateLink,
    deleteLink
} from '../controller/linkController.js';

const router = express.Router();

router.get('/', getLinks);
router.get('/:id', getLink);
router.post('/', addLink);
router.put('/:id', updateLink);
router.delete('/:id', deleteLink);

export default router;