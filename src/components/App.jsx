//import { useState } from "react";
import { Form } from './Form/Form';
import { ContactsList } from './Contacts/ContactsList';
import { Title, Header } from './Title.styled';
import { Filter } from './Filter/Filter';
import { Box } from './Box';
//import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, handleDelete } from "redux/contactsSlice";
import {setFilter} from "redux/filterSlice";


export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  // );
  
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const addNewContact = (newContact) => {
    const foundContact = contacts.find(contact => contact.name === newContact.name);
    
    (foundContact)
      ? window.alert(`${newContact.name} is alredy in contacts`)
      : dispatch(addContact(newContact))
    console.log(newContact);
  };

  const contactDelete = (contactId) => {
    dispatch(handleDelete(contactId))};

  const changeFilter = (e) => {
    dispatch(setFilter(e.currentTarget.value))
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return (
      contacts.filter(contact => 
        contact.name.toLocaleLowerCase().includes(normalizedFilter))
    )
  };

  
    const visibleContacts = getVisibleContacts();

    return (
      <Box bg="muted" p={3} border="normal" borderColor="lightGray" borderRadius="normal" width="25%"  boxShadow="0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16)" textAlign="center" margin="0 auto">
        <Header>Phonebook</Header>
        <Form onSubmit={addNewContact}/>
        <Title>Contacts</Title>
        <Filter value={filter} onChange={changeFilter}/>
        <ContactsList contacts={visibleContacts} onDeleteContact={contactDelete} />
      </Box>
    )
  
    

};