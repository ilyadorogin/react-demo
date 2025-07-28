import Breadcrumbs from '../ui/Breadcrumbs.tsx'
import { Outlet } from 'react-router-dom'

const TaskLayout = () => {
  return (
    <>
      <Breadcrumbs />
      <Outlet />
    </>
  )
}

export default TaskLayout
