import s from './Phonebook.module.css';

const Phonebook = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            onChange={handleChange}
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        {/* <label className={s.label}>
          Number
          <input
            onChange={handleChange}
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label> */}
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default Phonebook;
