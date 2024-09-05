import { MdOutlineAccountCircle } from "react-icons/md";
import { UserType } from "@/app/lib/types";
import Heading from "@/app/components/Heading";

interface Props {
  user: UserType;
}
const UserInformation = ({ user }: Props) => {
  return (
    <section className="flex items-center gap-4">
      <MdOutlineAccountCircle size={58} />
      <div>
        <Heading variant="h5">
          {user?.first_name + " " + user?.last_name}{" "}
        </Heading>
        <p className="text-xs">{user?.email}</p>
      </div>
    </section>
  );
};

export default UserInformation;
