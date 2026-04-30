import { Link } from '@tanstack/react-router'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { Skeleton } from '#/components/ui/skeleton'
import type { WorkspaceMode } from '#/features/projects/projects'
import { useProjectsQuery } from '#/features/projects/use-projects-query'

type ProjectPickerProps = {
  mode: WorkspaceMode
}

export function ProjectPicker({ mode }: ProjectPickerProps) {
  const { data: projects = [], isPending } = useProjectsQuery()
  const title = mode === 'kanban' ? 'Kanban' : 'Tasks'
  const description =
    mode === 'kanban'
      ? 'Choose a project to open its kanban board.'
      : 'Choose a project to open its task list.'
  const placeholders = Array.from({ length: 3 })

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {isPending
          ? placeholders.map((_, index) => (
              <Card key={index} size="sm" className="gap-2 py-3">
                <CardHeader className="gap-1 pb-2">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-4 w-40" />
                </CardHeader>
                <CardContent className="pb-1">
                  <Skeleton className="h-4 w-28" />
                </CardContent>
              </Card>
            ))
          : projects.map((project) => {
              return (
                <Card key={project.id} size="sm" className="gap-2 py-3">
                  <CardHeader className="gap-1 pb-2">
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-1">
                    {mode === 'kanban' ? (
                      <Link
                        to="/kanban/$projectName"
                        params={{ projectName: project.id }}
                        className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                      >
                        Open {title}
                      </Link>
                    ) : (
                      <Link
                        to="/tasks/$projectId"
                        params={{ projectId: project.id }}
                        className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                      >
                        Open {title}
                      </Link>
                    )}
                  </CardContent>
                </Card>
              )
            })}
      </div>
    </div>
  )
}
