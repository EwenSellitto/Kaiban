import { Link } from '@tanstack/react-router'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card'
import { projects, type WorkspaceMode } from './projects'

type ProjectPickerProps = {
  mode: WorkspaceMode
}

export function ProjectPicker({ mode }: ProjectPickerProps) {
  const title = mode === 'kanban' ? 'Kanban' : 'Tasks'
  const description =
    mode === 'kanban'
      ? 'Choose a project to open its kanban board.'
      : 'Choose a project to open its task list.'

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => {
          return (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
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
