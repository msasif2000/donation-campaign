
import { useLoaderData } from "react-router-dom";
import CardDonation from "../../components/CardDonation/CardDonation";
import Search from "../../components/Search/Search";


const Home = () => {
    const donations = useLoaderData();
    //console.log(donations);

    return (
        <div className="md:container mx-auto">
            <Search></Search>
            <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    donations?.map(donation => <CardDonation key={donation.id} donation={donation}></CardDonation>)
                }
            </div>
        </div>
    );
};

export default Home;