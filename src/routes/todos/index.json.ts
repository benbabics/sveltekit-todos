import type { RequestHandler } from "@sveltejs/kit"

let todos: App.Todo[] = [];

export const get: RequestHandler = () => {
  return {
    body: todos
  }
}

export const post: RequestHandler = async ({ request }) => {
  const form = await request.formData();
  todos.push({
    created_at: new Date(),
    done: false,
    text: <string>form.get('text'),
  })
  
  return {
    status: 303,
    headers: {
      location: "/"
    }
  }
}
