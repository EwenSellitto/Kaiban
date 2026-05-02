import { createFileRoute } from '@tanstack/react-router'

import { WorkspacePage } from '#/components/workspace/workspace-page'

export const Route = createFileRoute('/kanban/$projectId')({
  component: KanbanProject,
})

function KanbanProject() {
  const { projectId } = Route.useParams()

  return (
    <WorkspacePage mode="kanban" projectId={projectId}>
      <div className="flex flex-col gap-2 text-lg text-muted-foreground">
        <div>Kanban board content goes here.</div>
        <div className="text-sm">Project: {projectId}</div>
      </div>
    </WorkspacePage>
  )
}
