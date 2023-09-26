import { useEffect, useState } from "react";
import CardDonation from "../../components/CardDonation/CardDonation";
import Search from "../../components/Search/Search";


const Home = () => {
    const [donations, setDonations] = useState([]);
    const [displayDonations, setDisplayDonations] = useState([]);

    const handleSearchSubmit = (searchText) => {
        if (searchText) {
            const matchedDonations = donations.filter(donation =>
                donation.category.toLowerCase().includes(searchText.toLowerCase())
            );
            setDisplayDonations(matchedDonations);
        } else {
            setDisplayDonations(donations);
        }
    };

    useEffect(() => {
        fetch('/donation.json')
            .then(res => res.json())
            .then(data => {
                setDonations(data);
                setDisplayDonations(data);
            });
    }, []);

    return (
        <div className="md:container mx-auto">
            <Search handleSearchSubmit={handleSearchSubmit}></Search>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {displayDonations.map(donation => (
                    <CardDonation key={donation.id} donation={donation} handleSearchSubmit={handleSearchSubmit} />
                ))}
            </div>
        </div>
    );
};

export default Home;
