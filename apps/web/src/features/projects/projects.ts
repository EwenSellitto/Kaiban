export type WorkspaceMode = 'kanban' | 'tasks' | 'projects'

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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit fringilla ultricies. Fusce vel augue quis orci scelerisque vulputate. Pellentesque ac euismod ex. Morbi ut facilisis est, quis vulputate mi. Nam tempus, dui a hendrerit cursus, quam velit bibendum ligula, vitae dictum nisl erat blandit massa. Sed pellentesque nibh elit, vel dictum massa vehicula vel. Sed malesuada eros quis dui ultrices vestibulum. Quisque tempor tincidunt pellentesque. Sed vitae dolor rhoncus, venenatis augue nec, auctor sem. Ut semper mattis erat, ac accumsan nisl interdum sed. Integer tincidunt aliquet dui vel fermentum.',
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

export function getProjectById(projects: WorkspaceProject[] | undefined, projectId?: string) {
  return projects?.find((project) => project.id === projectId)
}
