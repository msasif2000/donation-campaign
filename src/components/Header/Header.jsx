import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import "./Header.css"

const Header = () => {
    return (
        <div className="md:h-[600px] ">
            <Navbar></Navbar>
            <Search></Search>
        </div>
    );
};

export default Header;