import CategoryNavItem from "./CategoryNavItem";

interface Props {
  categoryId: string;
}
const SubCategories = ({ categoryId }: Props) => {
  return (
    <ul
      className="absolute left-full top-0 bottom-0 rounded-lg bg-white border border-gray-200 
      has-scrollbar overflow-y-auto py-6 px-4  flex-wrap gap-x-4 gap-y-8 max-w-[696px] w-[696px]
      hidden group-hover:flex"
    >
      {[
        "Kitchen Appliances",
        "Laundry Appliances",
        "Climate Control Appliances",
        "Small Home Appliances",
        "Personal Care Appliances",
        "Cleaning Appliances",
        "Entertainment and Connectivity",
        "Safety and Security Appliances",
      ].map((name) => (
        <li key={name} className="max-w-[178px] flex-grow ">
          <h4 className="text-xs font-semibold border-b border-gray-300 pb-1">
            {categoryId + "->" + name}
          </h4>
          <ul>
            <CategoryNavItem previousRoute={categoryId + "/" + name} />
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default SubCategories;
