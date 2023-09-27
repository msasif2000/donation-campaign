import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
const DonatedDetail = ({ donation }) => {
    const cardStyle = {
        backgroundColor: donation.card_bg_color,
        color: donation.text_color,
        height: "150px",
        borderRadius: "5px",
        margin: "12px"
    }
    const catStyle = {
        backgroundColor: donation.category_bg_color,
        width: "fit-content",
        borderRadius: "5px",
    }
    const btnStyle = {
        backgroundColor: donation.text_color,
        color: "white",
        borderRadius: "5px",
        width: "fit-content",
    }
    return (
        <div style={cardStyle} className='flex md:space-x-8 space-x-2'>
            <img src={donation.image} className='md:w-1/3 w-2/5' alt="" />
            <div className='flex flex-col justify-center'>
                <h3 className='py-[2px] px-2' style={catStyle}>{donation.category}</h3>
                <h2 className='text-black font-bold md:text-xl'>{donation.title}</h2>
                <p className='font-bold'>${donation.price}</p>
                <Link to={`/DonationDetails/${donation.id}`}><button className='py-[2px] px-2 -ml-4' style={btnStyle}>View Details</button></Link>
            </div>
        </div>
    );
};

DonatedDetail.propTypes = {
    donation: PropTypes.object.isRequired
};

export default DonatedDetail;