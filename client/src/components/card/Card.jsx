import { Link } from 'react-router-dom';


const Card = ({ link, handleDelete }) => {

  return (
    <li>
      <div className={`card w-full min-h-[260px] bg-base-100 shadow-xl  border-slate-700 ${link.type == 'web' ? 'bg-green-100': 'bg-orange-100'}`}>
        <div className="card-body">
            <h2 className="card-title line-clamp-2">{link?.title}</h2>
            <p className='line-clamp-2'>{link?.description}</p>
            <Link to={`${link?.url}`} className='underline' target='_blank'>Visit link here</Link>
            <div className="card-actions justify-end mt-6">
                <Link to={`/update/${link._id}`} className="btn btn-neutral">Update</Link>
                <button onClick={() => handleDelete(link._id, link.title)} className="btn btn-error">Delete</button>
            </div>
        </div>
      </div>
    </li>
    
  );
};

export default Card;