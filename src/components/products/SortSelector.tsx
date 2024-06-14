import { DropdownMenu } from "../_ui-elements";
import useProductQueryStore from "./store";

interface SortOption {
  name: string;
  value: string;
}

const SortSelector = () => {
  const { productQuery, setSortBy } = useProductQueryStore();

  const sortOptions: SortOption[] = [
    {
      name: "Alphabetical (A-Z)",
      value: "name",
    },
    {
      name: "Alphabetical (Z-A)",
      value: "-name",
    },
    {
      name: "Lowest price",
      value: "price",
    },
    {
      name: "Highest price",
      value: "-price",
    },
    {
      name: "Lowest rating",
      value: "rating",
    },
    {
      name: "Highest rating",
      value: "-rating",
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