import { useState } from "react";
import ADDTASK from "../../popup/add-task/AddTask";
import Task from "../task/Task";
import { useSelector, useDispatch } from 'react-redux';
import { searchTask } from "../../redux/actions/action";
import './main.css'
function Main() {
    const dispatch = useDispatch();
    const [isOpen, setisOpen] = useState(false);
    const [task, setTask] = useState('');

    const openPopup = () => {
        setisOpen(true)
    }
    const handleClosePopup = () => {
        setisOpen(false);
    };
    const updateTask = (data) => {
        setTask(data);
    }
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        dispatch(searchTask(inputValue))
    };
    return (
        <>
            <div class="flex items-center justify-center h-screen ">
                <div class="bg-gray-200 p-8 rounded-lg h-5/6 overflow-y-auto w-2/4">
                    <h1 class="text-2xl font-bold mb-4 text-center">Todo List</h1>
                    <button class="px-4 py-2 mb-5 dark:bg-gray-900 text-white font-semibold rounded hover:dark:bg-gray-600 focus:outline-none focus:ring-2  " onClick={openPopup}>Add Task</button>
                    <div className="search-container">
                        <input
                            className="search-input"
                            placeholder="Search Any Task"
                            onChange={handleInputChange}
                        />
                    </div>                    <Task updatedTasks={task} />
                </div>
            </div>
            {isOpen ?
                (< ADDTASK onClose={handleClosePopup} setTask={updateTask} />) : ('')
            }
        </>
    );
}

export default Main;
