export const Contacts = ({ contacts,onDeleteContacts}) => {
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

