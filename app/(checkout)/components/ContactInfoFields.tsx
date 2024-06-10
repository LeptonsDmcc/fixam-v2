import FormInput from "@/app/components/Inputs/FormInput";
import Input from "@/app/components/Inputs/Input";
import FormSpacing from "@/app/components/Spacing/FormSpacing";
import GroupInput from "../../components/Inputs/GroupInput";
import FormInputGroup from "@/app/components/Inputs/FormInputGroup";

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
