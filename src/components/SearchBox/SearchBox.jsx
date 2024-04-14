import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onFilter}
        placeholder="Rosie Simpson"
      />
    </div>
  );
};

export default SearchBox;
