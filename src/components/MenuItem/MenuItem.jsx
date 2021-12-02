import { useState } from 'react';
import { useDispatch } from 'react-redux'

function MenuItem ({index ,item}) {

    const dispatch = useDispatch();

    const [showAdd, setAdd] = useState(true)

    const addOrRemove = () => {
        console.log('you clicked the button')
        console.log(showAdd);

        const thisItem = {
            id: index,
            quantity: 1
        }


        if (showAdd === true)  {
            console.log('Added');
            dispatch({
                type: 'ADD_ITEM',
                payload:thisItem
            })
        }
        else  {
            console.log('Removed');
        }
     setAdd(!showAdd);
    }
  
return  (
    <td key={index}>{item.name}: <br></br>{item.description} <img key={index} src={item.image_path} width="150px"></img><button onClick={addOrRemove}>{showAdd ? 'Add' : 'Remove'}</button></td>

)
}


export default MenuItem;