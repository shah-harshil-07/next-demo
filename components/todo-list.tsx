import ListItem from './list-item';
import { memo } from 'react';

const TodoList = memo((props: any) => {
    const { list, onRemove, calculation } = props;
    console.log("Todo List is rendering");

    return (
        <>
            <div>Calculation: {calculation}</div>
            <ul>
                {
                    list.map((todo: any) => (
                        <ListItem item={todo} key={todo.id} onRemove={onRemove} />
                    ))
                }
            </ul>
        </>
    )
})

export default TodoList;
