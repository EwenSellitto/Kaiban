import { Separator } from '#/components/ui/separator'
import { SidebarInset, SidebarTrigger } from '#/components/ui/sidebar'
import type { WorkspaceMode } from '#/features/projects/projects'
import { getProjectById } from '#/features/projects/projects'
import { useProjectsQuery } from '#/features/projects/use-projects-query'
import { cn } from '#/lib/utils'

import { Skeleton } from '../ui/skeleton'
import { WorkspaceSidebar } from './workspace-sidebar'

type WorkspacePageProps = {
  mode: WorkspaceMode
  projectId?: string
  className?: string
  children?: React.ReactNode
  contentClassName?: string
}

export function WorkspacePage({ mode, projectId, className, contentClassName, children }: WorkspacePageProps) {
  const { data: projects, isPending } = useProjectsQuery()
  const project = getProjectById(projects, projectId)

  return (
    <div className={cn('flex min-h-0 flex-1', className)}>
      <WorkspaceSidebar mode={mode} projectId={project?.id} />
      <SidebarInset className="flex min-w-0 flex-1 flex-col">
        <div className="relative flex h-10 items-center border-b border-t px-2 text-sm">
          <div className="flex shrink-0 items-center gap-2">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-9.5" />
          </div>
          <div className="pointer-events-none absolute left-1/2 flex min-w-0 -translate-x-1/2 items-center text-xs sm:text-sm">
            {isPending ? (
              <Skeleton className="h-4 w-24" />
            ) : project?.name ? (
              <span className="truncate font-medium">{project.name}</span>
            ) : null}
          </div>
        </div>
        <div className={cn('flex-1 sm:p-8 p-4', contentClassName)}>{children}</div>
      </SidebarInset>
    </div>
  )
}
