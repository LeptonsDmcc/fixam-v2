import FormInput from "@/app/components/Inputs/FormInput";
import FormInputGroup from "@/app/components/Inputs/FormInputGroup";
import GroupInput from "@/app/components/Inputs/GroupInput";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";

interface Props {
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
}

const ContactInfoFields = ({ email, phone, first_name, last_name }: Props) => {
  return (
    <FormInputGroup heading="Contact Information">
      <GroupInput>
        <FormInput variant="email" name="email" defaultValue={email || ""} />
        <FormInput variant="phone" name="phone" defaultValue={phone || ""} />
      </GroupInput>
      <ContentSpacing />
      <GroupInput>
        <FormInput
          variant="name"
          placeholder="Enter your first name"
          name="first_name"
          defaultValue={first_name || ""}
        />
        <FormInput
          variant="name"
          placeholder="Enter your last name"
          name="last_name"
          defaultValue={last_name || ""}
        />
      </GroupInput>
    </FormInputGroup>
  );
};

export default ContactInfoFields;
