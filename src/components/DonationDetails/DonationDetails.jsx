import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../Utility/LocalStorage/LocalStorage";

const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const donation = donations.find(donation => donation.id == id);
    //console.log(id);

    const handleDonation = () => {
        saveDonation(id)
        toast('Donation accepted successfully!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,   
            });
    }
    const bgStyle = {
        backgroundColor: donation.text_color
    }
    return (
        <div>
            <div className="m-24 md:w-4/6 w-5/6 mx-auto relative">
                <img className=" mx-auto w-full  object-cover rounded-xl" src={donation.image} alt="" />
                <div className=" bottom-0 w-full bg-blue-200 bg-opacity-50 p-3 absolute rounded-b-xl">
                    <button onClick={handleDonation} style={bgStyle} className=" py-2 px-5 rounded text-white">Donate ${donation.price}</button>
                    <ToastContainer />
                </div>
            </div>
            <div className="my-16 md:w-4/6 w-5/6 mx-auto">
                <h2 className="font-bold text-3xl py-8">{donation.title}</h2>
                <p>{donation.description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;