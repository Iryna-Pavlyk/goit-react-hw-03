import { MdPeopleAlt, MdOutlinePhoneInTalk } from "react-icons/md";
import css from "./Contact.module.css";

const Contact = ({ item: { name, number, id }, onDelete }) => {
  return (
    <div>
      <h2>
        <MdPeopleAlt color="#2196f3" size={22} />
        {name}
      </h2>
      <p>
        <MdOutlinePhoneInTalk color="#2196f3" size={22} />
        {number}
      </p>
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
