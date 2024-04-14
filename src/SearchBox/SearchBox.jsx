const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <input type="text" value={value} onChange={onFilter} />
    </div>
  );
};

export default SearchBox;
