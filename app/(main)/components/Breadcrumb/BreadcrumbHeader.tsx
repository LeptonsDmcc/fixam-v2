import capitalize from "@/app/lib/capitalize";
import Breadcrumb, { CrumbType } from "../Breadcrumb";
import Wrapper from "../Wrapper";
import BackButton from "../Buttons/BackButton";

interface Props {
  paths: CrumbType[];
  withHeading?: boolean;
  backText?: string;
}

const BreadcrumbHeader = ({ paths, withHeading, backText }: Props) => {
  return (
    <header
      className="hidden h-[120px] bg-gray-100 select-none
      md:block"
    >
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
