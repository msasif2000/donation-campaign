import "./Search.css"

const Search = () => {
    return (
        <div className="mt-32">
            <h1 className="text-center text-5xl font-bold text-purple-700">I Grow By Helping People In Need</h1>
            <div className="pt-6 pb-20 flex justify-center mx-auto">
                <input className="p-2 rounded-l-xl  w-[300px] bg-slate-200" type="text" placeholder="Search here..." />
                <button className="py-2 px-4 bg-[#FF444A] rounded-r-xl text-white">Search</button>
            </div>
        </div>
    );
};

export default Search;