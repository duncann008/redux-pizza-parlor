import { useSelector } from "react-redux";
import MenuItem from "../../MenuItem/MenuItem";

function MenuList() {
    const menuList = useSelector(store => store.menuList);
    console.log(menuList);

    return  (
        <tbody>
            <tr>
            {menuList.map((item, index) =>  
               <MenuItem key ={index} index={index} 
                item={item}/>
            )}
            </tr>
        </tbody>
    )
}

export default MenuList;