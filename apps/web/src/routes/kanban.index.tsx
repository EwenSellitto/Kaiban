import { createFileRoute } from '@tanstack/react-router'

import { ProjectPicker } from '#/components/workspace/project-picker'
import { WorkspacePage } from '#/components/workspace/workspace-page'

export const Route = createFileRoute('/kanban/')({ component: KanbanIndex })

function KanbanIndex() {
  return (
    <WorkspacePage mode="kanban">
      <ProjectPicker mode="kanban" />
    </WorkspacePage>
  )
}
