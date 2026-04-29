import { createFileRoute } from '@tanstack/react-router'

import { ProjectPicker } from '#/components/workspace/project-picker'
import { WorkspacePage } from '#/components/workspace/workspace-page'

export const Route = createFileRoute('/tasks/')({ component: TasksIndex })

function TasksIndex() {
  return (
    <WorkspacePage mode="tasks">
      <ProjectPicker mode="tasks" />
    </WorkspacePage>
  )
}
