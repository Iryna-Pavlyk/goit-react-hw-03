import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li className={css.list} key={item.id}>
              <Contact item={item} />
              <button className={css.button} type="button">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactList;
