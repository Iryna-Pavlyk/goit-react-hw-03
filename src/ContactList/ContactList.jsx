import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = ({ items, onDelete }) => {
  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li className={css.list} key={item.id}>
              <Contact item={item} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactList;
