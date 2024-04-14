import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ items, onDelete }) => {
  return (
    <div>
      <ul className={css.list}>
        {items.map((item) => {
          return (
            <li className={css.item} key={item.id}>
              <Contact item={item} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactList;
