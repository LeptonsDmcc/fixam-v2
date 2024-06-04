import Breadcrumb, { CrumbType } from "@/app/components/Breadcrumb";
import Wrapper from "@/app/components/Wrapper";
import BackButton from "../Buttons/BackButton";
import capitalize from "@/app/lib/capitalize";

interface Props {
  paths: CrumbType[];
  withHeading?: boolean;
  backText?: string;
}
const BreadcrumbHeader = ({ paths, withHeading, backText }: Props) => {
  return (
    <header className=" h-[120px] bg-gray-100 ">
      <Wrapper styles="flex h-full justify-between items-center">
        <div className={`${withHeading && "w-1/2"}`}>
          <Breadcrumb crumbs={paths} />
        </div>

        {withHeading && (
          <div className="w-auto">{capitalize(paths.at(-1)?.text || "")}</div>
        )}

        <div className="flex-grow flex justify-end">
          <BackButton>{backText ? backText : "Go back"}</BackButton>
        </div>
      </Wrapper>
    </header>
  );
};

export default BreadcrumbHeader;
