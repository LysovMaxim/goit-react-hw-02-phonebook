import PropTypes from 'prop-types';

export const Contacts = ({ contacts, onDeleteContacts }) => {
  return (
    <>
      <ul>
        {contacts.map(el => {
          return (
            <li key={el.id}>
              {el.name} <span>{el.number}</span>
              <button type="button" onClick={()=> onDeleteContacts(el.id)}>Delet</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  onDeleteContacts: PropTypes.func.isRequired,
  contacts : PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

