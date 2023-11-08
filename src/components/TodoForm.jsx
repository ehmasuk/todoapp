import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function TodoForm() {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");

    const [isNotFilled, setIsNotFiled] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "title") {
            setTitle(value);
        }
        if (name === "desc") {
            setDesc(value);
        }
        if (name === "category") {
            setCategory(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && desc && category) {
            const newTodo = { id: nanoid(), title, desc, category };
            dispatch(addTodo(newTodo));

            setIsAdded(true);
            setIsNotFiled(false);
            setTitle("");
            setDesc("");
            setCategory("");
        } else {
            setIsNotFiled(true);
            setIsAdded(false);
        }
    };

    if (isAdded) {
        setTimeout(() => setIsAdded(false), 3000);
    }

    return (
        <>
            <h4 className="mb-4">Add your todos</h4>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="title" value={title} type="text" placeholder="Title" className="form-control mb-3" />
                <input onChange={handleChange} name="desc" value={desc} type="text" placeholder="Description" className="form-control mb-3" />
                <select onChange={handleChange} name="category" value={category} className="form-control mb-3">
                    <option defaultValue disabled value="">
                        Category
                    </option>
                    <option value="family">Family</option>
                    <option value="office">Office</option>
                    <option value="urgent">Urgent</option>
                    <option value="hangout">Hangout</option>
                    <option value="celibration">Celibration</option>
                </select>
                <button className="mb-3 form-control btn-primary">Add</button>
                {isNotFilled && <b className="text-danger">You can not leave any field blank!</b>}
                {isAdded && <b className="text-success">New todo added</b>}
            </form>
        </>
    );
}

export default TodoForm;
