import { useState } from "react";
import { PiTrashThin } from "react-icons/pi";
import { TbEdit } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, setEditTodo } from "../features/todo/todoSlice";
import TodoEditPopup from "./todoEditPopup";

function TodoContens() {
    const dispatch = useDispatch();

    const allTodos = useSelector((allreducers) => {
        return allreducers.todoSlice.alltodos;
    });

    const handleDelete = (id) => {
        dispatch(removeTodo(id));
    };
    const handleEdit = (id) => {
        dispatch(setEditTodo(id));
        setShowPopup(true);
    };

    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            {showPopup && <TodoEditPopup setShowPopup={setShowPopup} />}

            <h4 className="text-center mb-4">{!allTodos.length > 0 ? "Your todo list is empty" : "Your todos"}</h4>

            {allTodos.length > 0 &&
                allTodos.map((todo, index) => {
                    return (
                        <div
                            key={index}
                            className="card mb-4 p-3"
                            style={{
                                background:
                                    (todo.category === "office" && "#e0ffe1") ||
                                    (todo.category === "family" && "#d0e9ff") ||
                                    (todo.category === "Hangout" && "#ffcefc") ||
                                    (todo.category === "celibration" && "#d0e9fc"),
                            }}
                        >
                            <p>
                                {" "}
                                <b style={{ minWidth: "100px", display: "inline-block" }}>Title</b>: {todo.title}
                            </p>
                            <p>
                                {" "}
                                <b style={{ minWidth: "100px", display: "inline-block" }}>Description</b>: {todo.desc}
                            </p>
                            <p>
                                {" "}
                                <b style={{ minWidth: "100px", display: "inline-block" }}>Category</b>: {todo.category}
                            </p>
                            <div className="text-right">
                                <TbEdit onClick={() => handleEdit(todo.id)} cursor="pointer" fontSize="20px" color={"black"} className="mr-3" />
                                <PiTrashThin onClick={() => handleDelete(todo.id)} cursor="pointer" fontSize="20px" color={"red"} />
                            </div>
                        </div>
                    );
                })}
        </>
    );
}

export default TodoContens;
