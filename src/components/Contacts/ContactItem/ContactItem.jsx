import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { handleDelete } from "redux/contactsSlice";
import { ContactItem, ContactDescription, ContactButton } from './ContactItem.styled';

const ContactsItem = ({contact}) => {
    
    const dispatch = useDispatch();
    const contactDelete = (contactId) => {
    dispatch(handleDelete(contactId))};

    return (
        <ContactItem>
        <ContactDescription>{contact.name}:</ContactDescription>
        <ContactDescription>{contact.number}</ContactDescription>
        <ContactButton type="button" onClick={() => contactDelete(contact.id)}>Delete</ContactButton>
    </ContactItem>
    )
};

ContactsItem.prototype = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};