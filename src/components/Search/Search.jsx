import { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({ handleSearchSubmit=""}) => {
    const [searchText, setSearchText] = useState(''); 
    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    // Handler function to handle the form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearchSubmit(searchText); 
    };

    return (
        <div className="mt-32">
            <h1 className="text-center text-5xl font-bold text-purple-700">I Grow By Helping People In Need</h1>
            <form onSubmit={handleSubmit} className="pt-6 pb-20 flex justify-center mx-auto">
                <input
                    className="p-2 rounded-l-xl w-[300px] bg-slate-200"
                    type="text"
                    placeholder="Search category here..."
                    value={searchText}
                    onChange={handleInputChange}
                    name="search"
                />
                <button type="submit" className="py-2 px-4 bg-[#FF444A] rounded-r-xl text-white">
                    Search
                </button>
            </form>
        </div>
    );
};

Search.propTypes = {
    handleSearchSubmit: PropTypes.func.isRequired,
};
export default Search;
