import { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({ handleSearchSubmit = "" }) => {
    const [searchText, setSearchText] = useState('');
    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearchSubmit(searchText);
    };


    return (
        <div className='px-2'>
            <div className="hero min-h-screen  my-12" style={{ backgroundImage: 'url(https://i.ibb.co/KxfJNnB/istockphoto-1353332258-612x612.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <form onSubmit={handleSubmit} className="pt-6 pb-20 flex justify-center mx-auto">
                            <input
                                className="p-2 rounded-l-xl w-[300px] text-black" type="text" placeholder="Search category here..." value={searchText}  onChange={handleInputChange} name="search"
                            />
                            <button type="submit" className="py-2 px-4 bg-[#FF444A] rounded-r-xl text-white">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

Search.propTypes = {
    handleSearchSubmit: PropTypes.func.isRequired,
};
export default Search;
