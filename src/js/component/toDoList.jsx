import React, { useState } from "react";


const ToDoList = () => {

	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState([]);

	//const handleChange = (e) => {
	//	setTask(e.target.value);
	//};

	const AddTask = (e) => {
		if (e.task !== "") {
			const taskDetails = {
				
				value: task,
				isCompleted: false,
			};

			setTaskList([...taskList, taskDetails]);
			setTask("")
		};
	};
	const deleteTask = (indexToDelete) => {
		
		setTaskList(taskList.filter((task,index) => index != indexToDelete));
		
	}

	return (<>
	    <div className="title glow">
			<h1>La vida del Esclavo</h1>
		</div>

		<div className="list glow">
			
			<div>
			<input
				className="input-field"
				type="text"
				name="text"
				id="text"
				placeholder="Add task here..."
				onChange={(e) => setTask(e.target.value)}
				value={task}
			/>

			<button onClick={AddTask} className="btn">Añadir tareas</button>
			
			</div>
			{taskList !== [] ? (
				<ul className="glow">
					{taskList.map((t,index) => (
						<li key={index} >
							{t.value}
							<button className="delete" onClick={() => deleteTask(index)}>
								X
							</button>
						</li>
					))}
				</ul>
			) : null}
		</div>
	</>
	);
};
	
	


export default ToDoList;