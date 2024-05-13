import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        url: '',
        type: ''
    });

    const { title, description, url, type } = formData;

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {title, description, url, type}

        fetchData(data);
    }

    const fetchData = async (data) => {
        try {
            await axios.post('http://localhost:5000/api/links', data);
            toast.success(`${title} successfully added`);
            navigate('/');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    } 

  return (
    <div className='grid place-items-center container mx-auto px-4'>
        <div className='w-full lg:w-[400px] h-max shadow-lg border border-slate-300 p-6 rounded-lg mt-40'>
            <h3 className="font-bold text-lg mb-6">Hello! Add a new URL</h3>
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
                        <button className='btn btn-neutral w-full' type="submit">Add Item</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
        
  );
};

export default AddItem;