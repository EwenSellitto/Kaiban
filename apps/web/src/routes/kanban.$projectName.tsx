import { createFileRoute } from '@tanstack/react-router'

import { WorkspacePage } from '#/components/workspace/workspace-page'

export const Route = createFileRoute('/kanban/$projectName')({
  component: KanbanProject,
})

function KanbanProject() {
  const { projectName } = Route.useParams()

  return (
    <WorkspacePage mode="kanban" projectId={projectName}>
      <div className="flex flex-col gap-2 text-lg text-muted-foreground">
        <div>Kanban board content goes here.</div>
        <div className="text-sm">Project: {projectName ?? 'missing'}</div>
      </div>
    </WorkspacePage>
  )
}
