import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Card from '../../components/card/Card';
import Loading from '../../components/loading/Loading';

const Video = () => {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetchData();
    }, []);
    
    const fetchData = async () => {
        try {
            const res = await axios.get('https://saveurl.onrender.com/api/links');
            setLoading(false);
            setLinks(res.data);
        } catch (err) {
           toast.error(err.response.data.message);
        }
    };

    const handleDelete = async (id, title) => {
        if (window.confirm(`Are you sure you want to delete ${title} item?`)) {
            try {
                await axios.delete(`https://saveurl.onrender.com/api/links/${id}`);
                setLinks((prevLinks) => prevLinks.filter((link) => link._id !== id));
                toast.success(`${title} susccessfully deleted`);
            } catch (err) {
                toast.error(err.response.data.message);
            }
        }
    };

    const list = links.filter((item) => {
        return item.type === 'video';
    }).map((item) => {
        return (
            <Card key={item._id} link={item} handleDelete={handleDelete} />
        )
    });

    if (loading) {
        return (
            <Loading />
        )
    }

  return (
    <div className='my-32'>
        <div className='container mx-auto px-4'>
            <h1 className='mb-10 text-3xl font-bold'>Video types of URL</h1>

            <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {links.length > 0 ?
                list :
                <h1>You have not set any items</h1>
                }
            </ul>
            
        </div>
    </div>
  );
};

export default Video;