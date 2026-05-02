import { Link } from '@tanstack/react-router'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card'
import { Skeleton } from '#/components/ui/skeleton'
import type { WorkspaceMode, WorkspaceProject } from '#/features/projects/projects'

type ProjectCardProps = {
  mode?: WorkspaceMode
  isPending: boolean
  project: WorkspaceProject | null
}

export function ProjectCard({ isPending, project, mode = 'projects' }: ProjectCardProps) {
  return isPending || !project ? (
    <Card size="sm" className="h-30 gap-2 py-3">
      <CardHeader className="gap-1 pb-2">
        <Skeleton className="h-5 w-24" />
      </CardHeader>
      <CardContent className="pb-1">
        <Skeleton className="h-4 w-14/15" />
        <Skeleton className="mt-1.5 h-4 w-full" />
        <Skeleton className="mt-1.5 h-4 w-27/30" />
        <Skeleton className="mt-1.5 h-4 w-full" />
      </CardContent>
    </Card>
  ) : (
    <Link to={`/${mode}/$projectId`} params={{ projectId: project.id }} className="h-full w-full">
      <Card size="sm" className="h-30 gap-2 py-3 hover:bg-muted">
        <CardHeader className="gap-1 pb-2">
          <CardTitle>{project.name}</CardTitle>
        </CardHeader>
        <CardContent className="pb-1">
          <CardDescription>
            {project.description.slice(0, 200) + (project.description.length > 132 ? ' [...]' : '')}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
