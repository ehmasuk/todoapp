import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { updateEditTodo } from "../features/todo/todoSlice";

function TodoEditPopup({setShowPopup}) {



    const dispatch = useDispatch()


    const storedEditedTodo = useSelector((allreducers) => allreducers.todoSlice.editedTodo)[0];

    const [editedTodo,setEditedTodo] = useState(storedEditedTodo)








    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        if(name === 'title'){
            setEditedTodo({...editedTodo, title : value})
        }
        if(name === 'category'){
            setEditedTodo({...editedTodo, category : value})
        }
        if(name === 'desc'){
            setEditedTodo({...editedTodo, desc : value})
        }



    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateEditTodo(editedTodo))
        setShowPopup(false)
    }


    return (
        <>
            <div className="wraper">
                <div className="inner">
                    <div className="text-right mb-3">
                        <AiOutlineClose cursor={'pointer'} onClick={()=>setShowPopup(false)} fontSize={'30px'} color={'red'} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} value={editedTodo.title} name="title" type="text" placeholder="Title" className="form-control mb-3" />
                        <input onChange={handleChange} value={editedTodo.desc} name="desc"  type="text" placeholder="Description" className="form-control mb-3" />
                        <select onChange={handleChange} value={editedTodo.category} name="category" className="form-control mb-3">
                            <option defaultValue disabled value="">
                                Category
                            </option>
                            <option value="family">Family</option>
                            <option value="office">Office</option>
                            <option value="urgent">Urgent</option>
                            <option value="hangout">Hangout</option>
                            <option value="celibration">Celibration</option>
                        </select>
                        <button className="mb-3 form-control btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default TodoEditPopup;
