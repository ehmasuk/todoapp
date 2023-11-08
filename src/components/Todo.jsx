import TodoContens from "./TodoContens";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";

function Todo() {
    return (
        <>
            <TodoHeader />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <TodoForm />
                    </div>
                    <div className="col-md-6">
                        <TodoContens />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;
