// 受け取ったtodoを追加する関数を定義する
const [todoItemList, setTodoList] = useState<Todo[]>([
    {
        title: "タイトル",
        content: "TODO内容はここに記載します。",
        status: "Done",
    },
    {
        title: "タイトル2",
        content: "TODO内容の二番目",
        status: "Progress",
    },
    {
        title: "タイトル3",
        content: "TODO内容の3番目",
        status: "Incomplete",
    },
]);
    const addTodoOnClick = (todo: Todo) => {
    // 配列は直接操作せずコピーを作ってから
    const newTodoList = [...todoItemList];

    newTodoList.push(todo); // pushは元の配列を破壊するためコピーに対して使う
    setTodoList(newTodoList); // 
    console.log("追加");
}