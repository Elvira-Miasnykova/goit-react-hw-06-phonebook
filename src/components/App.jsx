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
import { ContactsItem } from './Contacts/ContactItem/ContactItem';


export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.array);
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
    console.log(addContact(newContact));
  };

  const contactDelete = (contactId) => {
    dispatch(handleDelete(contactId))};

  

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    //console.log('normalizedFilter',normalizedFilter);
    return contacts.filter(contact => (contact.name.toLocaleLowerCase().includes(normalizedFilter)))
    
  };

  ///////// З visibleContacts не працює, що я не так роблю

  const visibleContacts = getVisibleContacts();

  const changeFilter = (e) => {
    dispatch(setFilter(e.currentTarget.value))
    console.log('setFilter', setFilter(e.currentTarget.value));
  };
  
  

    return (
      <Box bg="muted" p={3} border="normal" borderColor="lightGray" borderRadius="normal" width="25%"  boxShadow="0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16)" textAlign="center" margin="0 auto">
        <Header>Phonebook</Header>
        <Form onSubmit={addNewContact}/>
        <Title>Contacts</Title>
        <Filter value={filter} onChange={changeFilter}/>
        {/* <ContactsList contacts={visibleContacts} onDeleteContact={contactDelete} /> */}
        {contacts.length === 0 ? (
        <h3>Please, add new contact</h3>
      ) : (
        <Box as="ul">
            {contacts.map(({ name, number, id }) => {
                return (
                <ContactsItem key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={contactDelete} />
            )})}
        </Box>
      )}
      </Box>
    )
  
    

};