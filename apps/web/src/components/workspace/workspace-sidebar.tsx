import { Link } from '@tanstack/react-router'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '#/components/ui/sidebar'
import type { WorkspaceMode } from '#/features/projects/projects'
import { getProjectById } from '#/features/projects/projects'
import { useProjectsQuery } from '#/features/projects/use-projects-query'

type WorkspaceSidebarProps = {
  mode: WorkspaceMode
  projectId?: string
}

export function WorkspaceSidebar({ mode, projectId }: WorkspaceSidebarProps) {
  const { data: projects = [] } = useProjectsQuery()
  const activeProject = getProjectById(projects, projectId)
  const basePath = mode === 'kanban' ? '/kanban' : '/tasks'

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-2 pt-2 text-sm font-medium text-sidebar-foreground">
          {mode === 'kanban' ? 'Kanban' : 'Tasks'}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => {
                const to = `${basePath}/${project.id}`
                return (
                  <SidebarMenuItem key={project.id}>
                    <SidebarMenuButton asChild isActive={project.id === activeProject?.id}>
                      <Link to={to}>{project.name}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
