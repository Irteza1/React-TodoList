import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ADDTASK from '../../popup/add-task/AddTask';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/actions/action';
function Task() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tasks = useSelector((state) => state.tasks);
    const [task, setTask] = useState(tasks);
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState('');
    const [update, setUpdate] = useState(false);
    const seeFullTask = (object) => {
        navigate(`/full-task/${object.id}`, { state: object });
    }
    const deleteTask1 = (Id) => {
        dispatch(deleteTask(Id));
        console.log(tasks)
    }
    const updateTask = (Id) => {
        setId(Id);
        setUpdate(true)
        setEdit(true)
    }
    useEffect(() => {
        setTask(tasks);
    }, [tasks]);

    const handleClosePopup = () => {
        setUpdate(false);
    };
    return (
        <>
            <div class=" grid grid-cols-2 gap-5">
                {task?.map((object) => (
                    <div class="bg-gray-300 p-8 rounded-lg " key={object.id}>
                        <h1 class=" font-bold mb-4 text-center">{object?.taskName}</h1>
                        {object?.taskDescription?.length < 150 ? (
                            <p>{object?.taskDescription}</p>
                        ) : (
                            <>
                                <span>{object?.taskDescription?.substring(0, 150)}... </span>
                                <span className="text-blue-500 cursor-pointer" onClick={() => seeFullTask(object)}>See more</span>

                            </>
                        )}
                        <div class="block">
                            <button class="mr-5 px-4 py-2 mb-5 dark:bg-gray-600 text-white font-semibold rounded hover:dark:bg-gray-500 focus:outline-none focus:ring-2  mt-5" onClick={() => updateTask(object)} >Edit</button>
                            <button class="px-4 py-2 mb-5 dark:bg-gray-600 text-white font-semibold rounded hover:dark:bg-gray-500 focus:outline-none focus:ring-2  mt-5" onClick={() => deleteTask1(object.id)} >Delete</button>
                        </div>

                    </div>

                ))}

            </div>
            <div>{update ? (<><ADDTASK onClose={handleClosePopup} edit={edit} id={id} /></>) : (<></>)}</div>
        </>
    );
}

export default Task;
