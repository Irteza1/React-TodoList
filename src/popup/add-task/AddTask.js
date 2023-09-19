import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, updateTask } from '../../redux/actions/action';
const ADDTASK = ({ onClose, edit, id }) => {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const [taskname, setTaskname] = useState(id ? id.taskName : '');
  const [description, setDescription] = useState(id ? id.taskDescription : '');

  const taskName = (event) => {
    setTaskname(event.target.value);
  }
  const taskDescription = (event) => {
    setDescription(event.target.value);
  }
  const onSubmit = (event) => {
    if (edit) {
      dispatch(updateTask(id.id, taskname, description));
    }
    else {
      dispatch(addTask(tasks?.length + 1, taskname, description));
    }
    onClose();
  }

  return (
    <div class="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
      <div class=" p-8 bg-white shadow-md rounded-lg w-1/3">
        <h2 class="text-2xl font-bold mb-4">{edit ? <>Update Task</> : <>Create Task</>}</h2>
        <form onSubmit={(event) => onSubmit(event)}>
          <div class="mb-4">
            <label class="block font-bold mb-1">Task Name</label>
            <input type="text" id="taskName" class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:dark:border-gray-600" value={taskname} onInput={(event) => taskName(event)} />
          </div>
          <div class="mb-4">
            <label htmlFor="taskDescription" class="block font-bold mb-1">Task Description</label>
            <textarea id="taskDescription" rows="3" class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:dark:border-gray-600" value={description} onInput={(event) => taskDescription(event)}  ></textarea>
          </div>
          <div class="flex justify-end">
            <button type="submit" class="px-4 py-2 mr-2 text-white bg-gray-800 rounded hover:dark:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300" >{edit ? (<>Update</>) : (<>Create</>)}</button>
            <button type="button" class="px-4 py-2 text-gray-600 bg-gray-300 rounded hover:bg-gray-400  focus:outline-none focus:ring focus:border-blue-300" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default ADDTASK;