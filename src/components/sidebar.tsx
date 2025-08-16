'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
} from '@/components/ui/sidebar'
import { sidebarConstants } from '@/lib/sidebar-const'
import { cn } from '@/lib/utils'

const SideBar = () => {
  const pathname = usePathname()

  return (
    <div className="rounded-3xl">
      <Sidebar collapsible="none" side="left">
        <div className="m-2 rounded-4xl p-2">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className={cn("gap-2 text-white")}>
                <Menu className="mt-1" />
                <h1 className="text-2xl text-white font-semibold">Super Admin</h1>
              </SidebarGroupLabel>

              <div className='mt-8'>
                <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarConstants.map((item) => {
                    const isActive = pathname === item.url || pathname.startsWith(`${item.url}/`)
                    return (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          className={cn(
                            'my-3 text-2xl text-white hover:bg-blue-800 hover:text-white rounded-xl',
                            isActive && 'bg-blue-800', isActive && 'text-white'
                          )}
                        >
                          <Link href={item.url}>
                            <item.icon className="h-6 w-6" />
                            <span>{item.name}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
              </div>
            </SidebarGroup>
          </SidebarContent>
        </div>
      </Sidebar>
    </div>
  )
}

export default SideBar