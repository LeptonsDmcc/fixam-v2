"use client";
import Breadcrumb from "@/app/components/Breadcrumb";
import SubCategories from "@/app/components/Categories/SubCategories";
import Wrapper from "@/app/components/Wrapper";
import capitalize from "@/app/lib/capitalize";
import decodePath from "@/app/lib/decodePath";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

interface Props {
  paths: string[];
  withHeading?: boolean;
  backText?: string;
}
const BreadcrumbHeader = ({ paths, withHeading, backText }: Props) => {
  const router = useRouter();

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
          <button
            onClick={() => router.back()}
            className="flex items-center text-orange-400 gap-1 text-sm
             hover:text-orange-600"
          >
            <span>{backText ? backText : "Go back"}</span>{" "}
            <BiArrowBack size={18} />
          </button>
        </div>
      </Wrapper>
    </header>
  );
};

export default BreadcrumbHeader;
