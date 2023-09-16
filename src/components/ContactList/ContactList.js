import {
  ContactsList,
  ContactListItem,
  ContactButton,
  ContactTitle,
} from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(contacts => {
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
