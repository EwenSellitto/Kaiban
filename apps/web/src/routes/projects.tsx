import { createFileRoute, Link } from '@tanstack/react-router'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { Skeleton } from '#/components/ui/skeleton'
import { useProjectsQuery } from '#/features/projects/use-projects-query'

export const Route = createFileRoute('/projects')({ component: Projects })

function Projects() {
  const { data: projects = [], isPending } = useProjectsQuery()
  const placeholders = Array.from({ length: 3 })

  return (
    <div className="p-4 sm:p-6 size-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          Choose a project to jump into Kanban or Tasks.
        </p>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {isPending
          ? placeholders.map((_, index) => (
              <Card key={index} size="sm" className="gap-2 py-3">
                <CardHeader className="gap-1 pb-2">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-4 w-40" />
                </CardHeader>
                <CardContent className="flex gap-3 pb-1">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-12" />
                </CardContent>
              </Card>
            ))
          : projects.map((project) => (
              <Card key={project.id} size="sm" className="gap-2 py-3">
                <CardHeader className="gap-1 pb-2">
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-3 pb-1 text-sm text-muted-foreground">
                  <Link
                    to="/kanban/$projectName"
                    params={{ projectName: project.id }}
                  >
                    Kanban
                  </Link>
                  <Link
                    to="/tasks/$projectId"
                    params={{ projectId: project.id }}
                  >
                    Tasks
                  </Link>
                </CardContent>
              </Card>
            ))}
      </div>
    </div>
  )
}
