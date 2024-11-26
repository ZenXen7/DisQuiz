import PropTypes from 'prop-types'; // Import PropTypes

const Cards = ({ title, image, bgColor }) => {
  return (
    <div
      className={`group relative flex flex-col justify-between items-center p-4 w-72 h-96 ${bgColor} shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105`}
    >
      <h3 className="text-lg font-bold text-center mb-4">{title}</h3>
      <div className="w-full h-full mb-4">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

// Prop type validation
Cards.propTypes = {
  title: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired, 
  bgColor: PropTypes.string.isRequired,
};

export default Cards;
