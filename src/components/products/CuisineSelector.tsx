import { Cuisine } from "../../entities/Category";
import { DropdownMenu } from "../_ui-elements";
import useProductQueryStore from "./store";
import useCuisines from "./useCuisines";

const CuisineSelector = () => {
  const { data: cuisines } = useCuisines();
  const { productQuery, setCuisine } = useProductQueryStore();

  return (
    <DropdownMenu
      text="Cuisine"
      icon="filter_list"
      data={cuisines as unknown as Cuisine[]}
      selectedOption={productQuery.cuisine}
      setSelectedOption={(option) => setCuisine(option)}
      allOption={true}
    />
  )
}

export default CuisineSelector;