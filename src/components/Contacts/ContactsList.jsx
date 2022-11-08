import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { handleDelete } from "redux/contactsSlice";
//import { Box } from "../Box";
//import { ContactItem } from './ContactItem/ContactItem';
import { ContactItem, ContactButton, ContactDescription } from './ContactItem/ContactItem.styled';

export const ContactsList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.array);
    const filter = useSelector(state => state.filter);

    const contactDelete = (contactId) => {
        dispatch(handleDelete(contactId))
    };

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLocaleLowerCase();
    //console.log('normalizedFilter',normalizedFilter);
        return contacts.filter(contact => (contact.name.toLocaleLowerCase().includes(normalizedFilter)))
    };

    const visibleContacts = getVisibleContacts();
    
    return (
        <ul>
            {visibleContacts.map((contact) => 
                 <ContactItem key={contact.id}>
                        <ContactDescription>{contact.name}:</ContactDescription>
                        <ContactDescription>{contact.number}</ContactDescription>
                        <ContactButton type="button" onClick={() => contactDelete(contact.id)}>Delete</ContactButton>
                    </ContactItem>
            )}
        </ul>
    )
};

ContactsList.prototype = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};