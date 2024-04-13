const SearchBox = ({ inputValue, handleInputValue }) => {
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputValue} />
    </div>
  );
};

export default SearchBox;
