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
import { getProject, projects, type WorkspaceMode } from './projects'

type WorkspaceSidebarProps = {
  mode: WorkspaceMode
  projectId?: string
}

export function WorkspaceSidebar({ mode, projectId }: WorkspaceSidebarProps) {
  const activeProject = getProject(projectId)

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
                const to = mode === 'kanban'
                  ? `/kanban/${project.id}`
                  : `/tasks/${project.id}`

                return (
                  <SidebarMenuItem key={project.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={project.id === activeProject?.id}
                    >
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
