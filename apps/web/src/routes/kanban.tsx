import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/kanban')({ component: Kanban })

function Kanban() {
  return <Outlet />
}
