import { Link } from '@tanstack/react-router'

import { SidebarInset, SidebarTrigger } from '#/components/ui/sidebar'
import { Separator } from '#/components/ui/separator'
import { cn } from '#/lib/utils'
import { getProject, type WorkspaceMode } from './projects'
import { WorkspaceSidebar } from './workspace-sidebar'

type WorkspacePageProps = {
  mode: WorkspaceMode
  projectId?: string
  className?: string
  children?: React.ReactNode
  contentClassName?: string
}

export function WorkspacePage({
  mode,
  projectId,
  className,
  contentClassName,
  children,
}: WorkspacePageProps) {
  const project = projectId ? getProject(projectId) : undefined
  const pickerTo = mode === 'kanban' ? '/kanban' : '/tasks'

  return (
    <div className={cn('flex min-h-0 flex-1', className)}>
      <WorkspaceSidebar mode={mode} projectId={project?.id} />
      <SidebarInset className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-10 items-center gap-2 border-b px-3 text-sm">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <div className="flex min-w-0 items-center gap-2 text-xs sm:text-sm">
            <span className="text-muted-foreground">
              {mode === 'kanban' ? 'Kanban' : 'Tasks'}
            </span>
            <span className="text-muted-foreground">/</span>
            <Link
              to={pickerTo}
              className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
            >
              Projects
            </Link>
            {project?.name ? (
              <>
                <span className="text-muted-foreground">/</span>
                <span className="truncate font-medium">{project.name}</span>
              </>
            ) : null}
          </div>
          <div className="ml-auto text-xs text-muted-foreground sm:text-sm">
            <Link to="/projects">All Projects</Link>
          </div>
        </div>
        <div className={cn('flex-1 p-8', contentClassName)}>{children}</div>
      </SidebarInset>
    </div>
  )
}
