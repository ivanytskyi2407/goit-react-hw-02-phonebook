// import s from './Contacts.module.css';

const Contacts = ({ contacts }) => {
  return (
    <div>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        );
      })}
    </div>
  );
};
export default Contacts;
