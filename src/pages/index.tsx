import TodoForm from "../components/Todo/TodoForm";
import TodoListForm from "../components/Todo/TodoListForm";
import { Todo } from "../components/Todo/todoItem";


export default function Home() {
	return (
		<>
			<div className="w-100 flex justify-center">
				<div className="my-5">
					<h1 className="text-xl font-bold text-green-400">TodoList</h1>
					<TodoListForm />
				</div>
			</div>
		</>
	);
}