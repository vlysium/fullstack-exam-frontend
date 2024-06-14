import { Menu } from "../../entities/Category";
import { DropdownMenu } from "../_ui-elements";
import useProductQueryStore from "./store";
import useMenus from "./useMenus";

const MenuSelector = () => {
  const { data: menus } = useMenus();
  const { productQuery, setMenu } = useProductQueryStore();

  return (
    <DropdownMenu
      text="Menu"
      icon="filter_list"
      data={menus as unknown as Menu[]}
      selectedOption={productQuery.menu}
      setSelectedOption={(option) => setMenu(option)}
      allOption={true}
    />
  )
}

export default MenuSelector;