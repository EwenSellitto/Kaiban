import { ChevronRightIcon, BeanIcon } from 'lucide-react'

import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from '#/components/ui/item'
import { useSidebar } from '#/components/ui/sidebar'

export function ItemLink() {
  const { open } = useSidebar()

  return open ? (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item>
        <a>
          <ItemContent>
            <ItemTitle>Visit our documentation</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  ) : (
    <Item>
      <ItemMedia variant="icon">
        <BeanIcon />
      </ItemMedia>
    </Item>
  )
}
