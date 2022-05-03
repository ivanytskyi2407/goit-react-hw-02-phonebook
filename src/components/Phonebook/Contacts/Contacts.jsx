// import s from './Contacts.module.css';

const Contacts = ({ contacts, id }) => {
  return (
    <div>
      <h2>Contacts</h2>
      {/* {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        );
      })} */}
    </div>
  );
};
export default Contacts;
