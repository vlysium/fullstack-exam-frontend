import { DropdownMenu } from "../_ui-elements";
import useProductQueryStore from "./store";

interface SortOption {
  name: string;
  slug: string;
}

const SortSelector = () => {
  const { productQuery, setSortBy } = useProductQueryStore();

  const sortOptions: SortOption[] = [
    {
      name: "Alphabetical (A-Z)",
      slug: "name",
    },
    {
      name: "Alphabetical (Z-A)",
      slug: "-name",
    },
    {
      name: "Lowest price",
      slug: "price",
    },
    {
      name: "Highest price",
      slug: "-price",
    },
    {
      name: "Lowest rating",
      slug: "rating",
    },
    {
      name: "Highest rating",
      slug: "-rating",
    },
  ]

  return (
    <DropdownMenu
      text="Sort by"
      icon="filter_list"
      data={sortOptions}
      selectedOption={productQuery.sortBy}
      setSelectedOption={(option) => setSortBy(option)}
      allOption={false}
    />
  )
}

export default SortSelector;