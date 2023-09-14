import {
  ContactsList,
  ContactListItem,
  ContactButton,
  ContactTitle,
} from './ContactList.styled';

export const ContactList = ({ getVisibleContacts, deleteContact }) => {
  return (
    <ContactsList>
      {getVisibleContacts().map(contacts => {
        return (
          <ContactListItem key={contacts.id}>
            <ContactTitle>
              {contacts.name}, {contacts.number}
            </ContactTitle>
            <ContactButton onClick={() => deleteContact(contacts.id)}>
              Delete
            </ContactButton>
          </ContactListItem>
        );
      })}
    </ContactsList>
  );
};
