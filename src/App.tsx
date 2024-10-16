import './App.css';
import {Todolist} from "./Todolist";
import {useReducer} from "react";
import {v1} from "uuid";
import {addTaskAC, removeTaskAC, tasksReducer} from "./tasksReducer";

export type TaskType = {
	id: string,
	title: string,
	isDone: boolean,
};

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

	const [tasks, dispatch] = useReducer(tasksReducer,[
		{id: v1(), title: 'HTML&CSS', isDone: true},
		{id: v1(), title: 'JS', isDone: true},
		{id: v1(), title: 'ReactJS', isDone: false},
	])

	const removeTask = (taskId: string) => {
		dispatch(removeTaskAC(taskId))
	}

	const addTask = (title: string)=> {
		dispatch(addTaskAC(title))
	}

	return (
		<div className="App">
			<Todolist
				title="What to learn"
				removeTask={removeTask}
				addTask={addTask}
			/>
		</div>
	);
}

export default App;
