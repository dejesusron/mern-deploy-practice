import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const UpdateItem = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        url: '',
        type: ''
    });

    const { id } = useParams();

    const { title, description, url, type } = formData;

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const updatedData = { title, description, url, type };

        updateData(updatedData);
    }

    const fetchData = async () => {
        try {
            const res = await axios.get(`https://saveurl.onrender.com/api/links/${id}`);
            setFormData({
                title: res.data.title,
                description: res.data.description,
                url: res.data.url,
                type: res.data.type
            });
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    const updateData = async (updatedData) => {
        if (window.confirm(`Are you sure you want to update ${title}?`)) {
            try {
                await axios.put(`https://saveurl.onrender.com/api/links/${id}`, updatedData);
                toast.success('URL successfully updated');
                navigate('/');
            } catch (err) {
                toast.error(err.response.data.message);
            }
        }
    }

    useEffect(() => {
      fetchData();
    }, []);
    

  return (
    <div className='grid place-items-center container mx-auto px-4'>
        <div className='w-full lg:w-[400px] h-max shadow-lg border border-slate-300 p-6 rounded-lg mt-40'>
            <h3 className="font-bold text-lg mb-6">Update a URL</h3>
            <form onSubmit={onSubmit}>
                <div className='flex flex-col gap-y-4'>
                    <div>
                        <input type="text" placeholder="Title" className="input input-bordered w-full" name='title' onChange={onChange} value={title} />
                    </div>
                    <div>
                        <input type="text" placeholder="Description" className="input input-bordered w-full" name='description' onChange={onChange} value={description} />
                    </div>
                    <div>
                        <input type="text" placeholder="URL" className="input input-bordered w-full" name='url' onChange={onChange} value={url} />
                    </div>
                    <div>
                        <select className="select select-bordered w-full max-w-xs" name='type' value={type} onChange={onChange}>
                            <option disabled value=''>Type of URL</option>
                            <option value='web'>Web</option>
                            <option value='video'>Video</option>
                        </select>
                    </div>
                    <div>
                        <button className='btn btn-neutral w-full' type="submit">Update Item</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
};

export default UpdateItem;