import { Link } from '@tanstack/react-router'
import { House } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '#/components/ui/navigation-menu'

const links = [
  { to: '/', label: 'Home', icon: House },
  { to: '/projects', label: 'Projects' },
  { to: '/kanban', label: 'Kanban' },
  { to: '/tasks', label: 'Tasks' },
]

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl">
      <div className="flex h-14 w-full items-center justify-between px-4 sm:px-8">
        <NavigationMenu viewport={false} className="max-w-none justify-start">
          <NavigationMenuList className="gap-1 sm:gap-2">
            {links.map((link) => (
              <NavigationMenuItem key={link.to}>
                <NavigationMenuLink
                  asChild
                  className={
                    link.to === '/'
                      ? 'inline-flex h-10 w-10 items-center justify-center rounded-lg p-0 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground'
                      : 'inline-flex h-10 items-center justify-center rounded-lg px-2 sm:px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground'
                  }
                >
                  <Link
                    to={link.to}
                    activeProps={{ className: 'bg-muted text-foreground' }}
                    aria-label={link.label}
                  >
                    {'icon' in link ? (
                      <link.icon className="h-4 w-4" />
                    ) : (
                      link.label
                    )}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu viewport={false} className="max-w-none justify-end">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:bg-secondary/90"
              >
                <Link to="/auth">Login</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
