{
  type Todo = {
    title: string;
    description: string;
  };

  // Object 타입은 불변성을 유지하는것이 좋음
  function display(todo: Readonly<Todo>): void {
    todo.title = "jaja";
  }
}
