import type { Task } from '../../types/task.types.ts'
import { Link } from 'react-router-dom'

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <Link to={`/tasks/${task.id}`}>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <p>{task.status}</p>
      <p>{task.priority}</p>
      <p>{task.createdAt}</p>
    </Link>
  )
}

export default TaskCard
