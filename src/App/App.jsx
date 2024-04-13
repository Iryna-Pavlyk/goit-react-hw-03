import { useState } from "react";
// import { Formik } from "formik";
// import ContactForm from "../ContactForm/ContactForm";
// import * as Yup from "yup";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

function App() {
  const [items, setItems] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const filterValues = () => {
    return setItems(items.filter((item) => item.name === inputValue));
  };
  console.log(items.filter((item) => item.name === inputValue));
  return (
    <>
      <h1>Phonebook</h1>
      {/* <ContactForm  /> */}
      <SearchBox value={inputValue} onChange={handleInputValue} />
      <ContactList items={items} filterValues={filterValues} />
    </>
  );
}
export default App;
