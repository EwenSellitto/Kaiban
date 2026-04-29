export type WorkspaceMode = 'kanban' | 'tasks'

export type WorkspaceProject = {
  id: string
  name: string
  description: string
}

export const projects: WorkspaceProject[] = [
  {
    id: 'alpha',
    name: 'Alpha',
    description: 'Ship the first release',
  },
  {
    id: 'beta',
    name: 'Beta',
    description: 'Track the next milestone',
  },
  {
    id: 'gamma',
    name: 'Gamma',
    description: 'Coordinate design work',
  },
]

export function getProject(projectId: string | undefined) {
  return projects.find((project) => project.id === projectId)
}
