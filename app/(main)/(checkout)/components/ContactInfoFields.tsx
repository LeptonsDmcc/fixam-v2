import FormInput from "../../components/Inputs/FormInput";
import FormInputGroup from "../../components/Inputs/FormInputGroup";
import GroupInput from "../../components/Inputs/GroupInput";
import FormSpacing from "../../components/Spacing/FormSpacing";

const ContactInfoFields = () => {
  return (
    <FormInputGroup heading="Contact Information">
      <GroupInput>
        <FormInput variant="email" />
        <FormInput variant="phone" />
      </GroupInput>
      <FormSpacing />
      <GroupInput>
        <FormInput variant="name" placeholder="Enter your first name" />
        <FormInput variant="name" placeholder="Enter your last name" />
      </GroupInput>
    </FormInputGroup>
  );
};

export default ContactInfoFields;
