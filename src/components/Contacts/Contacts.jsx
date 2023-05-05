export const Contacts = ({ contacts}) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(el => {
          return (
            <li key={el.id}>
              {el.name} <span>{el.number}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
