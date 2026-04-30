import { useQuery } from '@tanstack/react-query'

import { fetchProjects } from './projects'

export function useProjectsQuery() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  })
}
