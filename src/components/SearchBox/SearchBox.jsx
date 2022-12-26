export const SearchBox = ({ onChange, value }) => {
  return (
    <div>
      <label>
        <input
          value={value}
          type="text"
          placeholder="Enter a name"
          onChange={e => onChange(e.target.value)}
        />
      </label>
    </div>
  );
};
