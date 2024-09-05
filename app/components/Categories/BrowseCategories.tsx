import CategoryNavigations from "../Navigations/CategoryNavigations";

interface Props {
  isCollapsible?: boolean;
}

const BrowseCategories = ({ isCollapsible }: Props) => {
  return (
    <CategoryNavigations
      heading="Browse Categories"
      isCollapsible={isCollapsible}
    />
  );
};

export default BrowseCategories;
