import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
const DonatedDetail = ({donation}) => {
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
        padding: "4px 8px",
        borderRadius: "5px",
        margin: "8px 0px",
    }
    const btnStyle = {
        backgroundColor: donation.text_color,
        color:"white",
        padding: "4px 8px",
        borderRadius: "5px",
        width: "fit-content",
        margin: "8px -15px"
    }
    return (
        <div  style={cardStyle} className='flex space-x-8'>
            <img src={donation.image} className='w-1/3 ' alt="" /> 
            <div className='flex flex-col justify-center pr-16'>
                <h3 style={catStyle}>{donation.category}</h3>
                <h2 className='text-black font-bold text-xl'>{donation.title}</h2>
                <p className='font-bold'>${donation.price}</p>
                <Link to={`/DonationDetails/${donation.id}`}><button style={btnStyle}>View Details</button></Link>
            </div>
        </div>
    );
};

DonatedDetail.propTypes = {
    donation: PropTypes.object.isRequired
};

export default DonatedDetail;