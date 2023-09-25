import { useLoaderData } from "react-router-dom";
import DonatedDetail from "../../components/DonatedDetail/DonatedDetail";
import { useEffect, useState } from "react";
import { getStoredDonation } from "../../Utility/LocalStorage/LocalStorage";


const Donation = () => {
    const donations = useLoaderData();
    //console.log(donations);

    const [donated, setDonated] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        const storedDonationId = getStoredDonation();
        //console.log(storedDonationId);
        if (donations.length > 0) {
            const moneyDonated = [];
            for (const id of storedDonationId) {
                const donation = donations.find(donation => donation.id === id);
                if (donation) {
                    moneyDonated.push(donation);
                }
            }
            setDonated(moneyDonated);
        }
    }, [donations]);

    return (
        <div>
            <div className="grid lg:grid-cols-2 gap:6 my-16">
                {
                    donated.slice(0, dataLength).map(donation => <DonatedDetail key={donation.id} donation={donation}></DonatedDetail>)
                }
            </div>
            <div className={dataLength >= donated.length && 'hidden'}>
                <button onClick={() => setDataLength(donated.length)} className="btn bg-green-500 text-white flex mx-auto mb-8" >See All</button>
            </div>
        </div>
    );
};

export default Donation;