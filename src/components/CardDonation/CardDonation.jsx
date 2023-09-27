import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardDonation = ({ donation }) => {
    const { id, image, card_bg_color, text_color, category, category_bg_color, title } = donation;

    const cardStyle = {
        backgroundColor: card_bg_color,
        color: text_color,
        width: "fit-content",
        borderRadius: "5px",

    }
    const catStyle = {
        backgroundColor: category_bg_color,
        color: text_color,
        width: "fit-content",
        padding: "4px 8px",
        borderRadius: "5px",
        margin: "12px"
    }
    return (

        <Link to={`/DonationDetails/${id}`}>
            <div style={cardStyle} className='md:container mx-auto mb-24 md:h-[290px]'>
                <img src={image} alt="" />
                <p style={catStyle}>{category}</p>
                <p className="pb-2 px-2 ml-3 text-xl font-bold">{title}</p>
            </div>
        </Link>

    );
};

CardDonation.propTypes = {
    donation: PropTypes.object.isRequired
};
export default CardDonation;