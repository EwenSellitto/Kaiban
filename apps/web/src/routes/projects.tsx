import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card'
import { projects } from '#/components/workspace/projects'

export const Route = createFileRoute('/projects')({ component: Projects })

function Projects() {
  return (
    <div className="p-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-muted-foreground">Choose a project to jump into Kanban or Tasks.</p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-3 text-sm text-muted-foreground">
              <Link to="/kanban/$projectName" params={{ projectName: project.id }}>
                Kanban
              </Link>
              <Link to="/tasks/$projectId" params={{ projectId: project.id }}>
                Tasks
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
