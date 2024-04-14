import { MdPeopleAlt, MdOutlinePhoneInTalk } from "react-icons/md";
import css from "./Contact.module.css";

const Contact = ({ item: { name, number, id }, onDelete }) => {
  return (
    <div className={css.wrapper}>
      <div>
        <h2>
          <MdPeopleAlt color="#2196f3" size={22} />
          {name}
        </h2>
        <p className={css.text}>
          <MdOutlinePhoneInTalk color="#2196f3" size={22} />
          {number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default Contact;
