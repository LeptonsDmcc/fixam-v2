import Breadcrumb from "@/app/components/Breadcrumb";
import Wrapper from "@/app/components/Wrapper";
import capitalize from "@/app/lib/capitalize";
import decodePath from "@/app/lib/decodePath";
import BackButton from "../Buttons/BackButton";

interface Props {
  paths: string[];
  withHeading?: boolean;
  backText?: string;
}
const BreadcrumbHeader = ({ paths, withHeading, backText }: Props) => {
  return (
    <header className=" h-[120px] bg-gray-100 ">
      <Wrapper styles="flex h-full justify-between items-center">
        <div className={`${withHeading && "w-1/2"}`}>
          <Breadcrumb crumbs={decodePath(paths.join("/"))} />
        </div>

        {withHeading && (
          <div className="w-auto">
            {capitalize(decodePath(paths.join("/")).at(-1) || "")}
          </div>
        )}

        <div className="flex-grow flex justify-end">
          <BackButton>{backText ? backText : "Go back"}</BackButton>
        </div>
      </Wrapper>
    </header>
  );
};

export default BreadcrumbHeader;
