import PropTypes from 'prop-types';

const ISItem = ({ parameter, index }) => {
  const even = index % 2 === 0;
  const itemColor = even ? 'bg-buttonSecondColor' : 'bg-buttonFirstColor';

  return (
    <li className={`flex justify-between text-white h-full p-5 ${itemColor}`}>
      <span>{parameter[0]}</span>
      <span>{parameter[1]}</span>
    </li>
  );
};

export default ISItem;

ISItem.propTypes = {
  parameter: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
  index: PropTypes.number.isRequired,
};
