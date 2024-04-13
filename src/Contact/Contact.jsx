import { MdPeopleAlt, MdOutlinePhoneInTalk } from "react-icons/md";

const Contact = ({ item: { name, number } }) => {
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
    </div>
  );
};
export default Contact;
