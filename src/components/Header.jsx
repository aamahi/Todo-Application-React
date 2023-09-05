import PropTypes from "prop-types";
import Button from "./Button.jsx";
const Header = ({title, showAddTask, onAdd}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
        <Button color={showAddTask?'red' :'black'} text={showAddTask? 'Close' : 'Add'} addButton={onAdd}/>
    </header>
  );
}

// CSS in JS
const headingStyle = {
    color: 'red',
    backgroundColor: '#ddd',
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.proTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
