import TaskCard from '../components/ui/TaskCard.tsx'
import type { Task } from '../types/task.types.ts'
import { type LoaderFunction, useLoaderData } from 'react-router-dom'

export const taskListLoader: LoaderFunction = async () => {
  const response = await fetch('http://localhost:3001/tasks')
  if (!response.ok) {
    throw new Error('Failed to load tasks')
  }
  return response.json()
}

const TaskList = () => {
  const tasks = useLoaderData<Task[]>()

  return (
    <>
      {tasks.map((task) => (
        <TaskCard task={task}></TaskCard>
      ))}
    </>
  )
}

export default TaskList
