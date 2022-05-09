export const get = async () => {
  const res = await fetch('http://localhost:3000/todos.json');
  const todos = await res.json();

  return {
    body: { todos }
  }
}
