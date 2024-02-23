import { memo } from "react";

const ListItem = memo(({ item, onRemove }: any) => {
    console.log("Todo Item is rendering");
    return (
        <li>
            {item.name}&nbsp;&nbsp;
            <button type="button" className="btn btn-outline-danger mt-3" onClick={() => onRemove(item.id)}>Remove</button>
        </li>
    );
})

export default ListItem;
