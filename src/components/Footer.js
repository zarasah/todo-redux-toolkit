import { useDispatch } from "react-redux";
import { deleteAll, deleteCompleted } from "../store/todoSlice";

export default function Footer({setShowFooter}) {
    const dispatch = useDispatch();

    return (
        <div className = 'footer'>
            <button onClick = {() => dispatch(deleteAll())}>Clean All List</button>
            <button onClick={() => dispatch(deleteCompleted())}>Clear Completed</button>
        </div>
    )
}