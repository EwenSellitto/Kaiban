export type WorkspaceMode = 'kanban' | 'tasks'

export type WorkspaceProject = {
  id: string
  name: string
  description: string
}

const mockProjects: WorkspaceProject[] = [
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
  {
    id: 'delta',
    name: 'Delta',
    description: 'Organize marketing campaign',
  },
]

export async function fetchProjects(): Promise<WorkspaceProject[]> {
  await new Promise((resolve) => setTimeout(resolve, 150))

  return mockProjects
}

export function getProjectById(
  projects: WorkspaceProject[] | undefined,
  projectId?: string,
) {
  return projects?.find((project) => project.id === projectId)
}
