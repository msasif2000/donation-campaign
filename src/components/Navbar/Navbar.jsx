import { NavLink, Outlet } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="md:flex items-center justify-between pt-8">
            <div className="flex items-center gap-4">
                <img className="h-16" src="https://i.ibb.co/D8zsKqv/Group.png" alt="logo" />
                <div className="">
                    <h2 className="text-[#FF444A] font-bold text-3xl">Donation</h2>
                    <h4 className="text-xl tracking-[.30em]">Campaign</h4>
                </div>
            </div>
            <div className="mr-5 text-xl text-center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/donation">Donation</NavLink>
                <NavLink to="/statistics">Statistics</NavLink>
            </div>
        </div>
        <Outlet></Outlet>
        </div>
    );
};

export default Navbar;