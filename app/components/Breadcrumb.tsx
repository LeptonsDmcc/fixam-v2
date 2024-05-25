import Link from "next/link";
import { ROUTES } from "../lib/contants";
import capitalize from "../lib/capitalize";

interface Props {
  crumbs: string[];
}

const Breadcrumb = ({ crumbs }: Props) => {
  // Initialize a variable to keep the cumulative path
  let cumulativePath = ROUTES.product;

  return (
    <ul className="flex items-center space-x-2">
      <li className="hover:text-gray-600">
        <Link href={`/`}>Home</Link>
      </li>
      {crumbs.map((crumb, index) => {
        // Append the current crumb to the cumulative path
        cumulativePath += `/${crumb}`;

        return (
          <li
            key={index}
            className="flex items-center  before:border-[6px] border-solid before:border-transparent 
            before:border-l-gray-900 last-of-type:text-gray-300 last-of-type:pointer-events-none 
            hover:text-gray-600"
          >
            <Link href={cumulativePath}>{capitalize(crumb)}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumb;
