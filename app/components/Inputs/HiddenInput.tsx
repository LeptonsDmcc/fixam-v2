import React from "react";

interface Props {
  name: string;
  value: string;
}
const HiddenInput = ({ name, value }: Readonly<Props>) => {
  // <input type="text" hidden name="editId" value={address?.id} />
  return <input type="hidden" name={name} value={value} />;
};

export default HiddenInput;
