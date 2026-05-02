import type { WorkspaceMode } from '#/features/projects/projects'
import { useProjectsQuery } from '#/features/projects/use-projects-query'

import { ProjectCard } from '../projects/project-card'

type ProjectPickerProps = {
  mode: WorkspaceMode
}

export function ProjectPicker({ mode }: ProjectPickerProps) {
  const { data: projects = Array.from({ length: 3 }), isPending } = useProjectsQuery()
  const uuid = crypto.randomUUID()
  const title = mode === 'kanban' ? 'Kanban' : 'Tasks'
  const description =
    mode === 'kanban' ? 'Choose a project to open its kanban board.' : 'Choose a project to open its task list.'

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} isPending={isPending} project={p} mode={mode} />
        ))}
      </div>
    </div>
  )
}
