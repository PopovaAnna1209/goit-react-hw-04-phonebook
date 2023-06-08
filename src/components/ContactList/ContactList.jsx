import PropTypes from 'prop-types';
import './ContactList.module.css';
import { ContactListElem } from '../ContactListElem/ContactListElem';

export const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => {
      return (
        <ContactListElem
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={deleteContact}
          />
      );
    })}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
})),
  deleteContact: PropTypes.func.isRequired,
};