import { createFileRoute } from '@tanstack/react-router'

import { WorkspacePage } from '#/components/workspace/workspace-page'

export const Route = createFileRoute('/tasks/$projectId')({ component: TasksProject })

function TasksProject() {
  const { projectId } = Route.useParams()

  return (
    <WorkspacePage mode="tasks" projectId={projectId}>
      <div className="flex flex-col gap-2 text-lg text-muted-foreground">
        <div>Tasks content goes here.</div>
        <div className="text-sm">Project: {projectId ?? 'missing'}</div>
      </div>
    </WorkspacePage>
  )
}
