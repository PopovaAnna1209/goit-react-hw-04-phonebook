import PropTypes from 'prop-types';


export const ContactListElem = ({ id, name, number, onClick }) => {
    return (
    <li>
        <p>
        {name}: {number}
        </p>
        <button type="button" onClick={() => onClick(id)}>
            Delete
        </button>
    </li>
    );
    }

ContactListElem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};