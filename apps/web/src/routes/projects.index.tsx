import { createFileRoute } from '@tanstack/react-router'
import { useMemo } from 'react'

import { ProjectCard } from '#/components/projects/project-card'
import { useProjectsQuery } from '#/features/projects/use-projects-query'

export const Route = createFileRoute('/projects/')({ component: Projects })

function Projects() {
  const { data: projects = Array.from({ length: 3 }), isPending } = useProjectsQuery()
  const uuid = useMemo(() => crypto.randomUUID(), [])

  return (
    <div className="p-4 sm:p-6 size-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-muted-foreground">Choose a project to jump into Kanban or Tasks.</p>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} isPending={isPending} />
        ))}
      </div>
    </div>
  )
}
