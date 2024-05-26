const SelectInput = () => {
  return (
    <select
      name="rating"
      id="Rating"
      className=" border h-12 w-full rounded-lg text-gray-400 px-4"
    >
      <option value="5">5 Excelent</option>
      <option value="4">4 Good</option>
      <option value="3">3 Average </option>
      <option value="2">2 Below Average </option>
      <option value="1">1 Poor </option>
    </select>
  );
};

export default SelectInput;
