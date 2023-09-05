import PropTypes from "prop-types";

const Button = ( {color, text, addButton}) => {
  return (
    <button onClick={addButton} className="btn" style={{backgroundColor:color}}>{text}</button>
  );
}
Button.defaultProps = {
    color: 'steelblue',
    text: 'Add',
}
Button.proTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    addButton: PropTypes.func,
}
export default Button;
