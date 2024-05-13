import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='shadow-lg w-full fixed top-0 left-0 z-50 bg-white'>
        <div className="navbar bg-base-100 container mx-auto px-4">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost text-3xl font-bold">SaveURL</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className='grid place-items-center'>
                        <details>
                            <summary>
                                Types
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/web'>Web</Link></li>
                                <li><Link to='/video'>Video</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link className='btn btn-neutral px-6 py-2 ml-2' to='/add'>Add new</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Header;