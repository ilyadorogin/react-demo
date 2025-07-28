import { type LoaderFunction, useLoaderData } from 'react-router-dom'
import type { Task } from '../types/task.types.ts'

export const taskLoader: LoaderFunction = async ({ params }) => {
  const response = await fetch(`http://localhost:3001/tasks/${params.id}`)
  if (!response.ok) {
    throw new Error('Failed to load tasks')
  }
  return response.json()
}

const TaskDetail = () => {
  const task = useLoaderData() as Task

  return (
    <div>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <p>{task.status}</p>
      <p>{task.priority}</p>
      <p>{task.createdAt}</p>
    </div>
  )
}

export default TaskDetail
