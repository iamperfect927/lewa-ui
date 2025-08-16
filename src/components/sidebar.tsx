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
    <div className="">
      <Sidebar collapsible="none" side="left" className='rounded-3xl px-2'>
        <div className="">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className={cn("flex justify-start gap-4 text-white mb-15 mt-5")}>
                <Menu className="" />
                <h1 className="text-2xl font-semibold">Super Admin</h1>
              </SidebarGroupLabel>

              <div className=''>
                <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarConstants.map((item) => {
                    const isActive = pathname === item.url || pathname.startsWith(`${item.url}/`)
                    return (
                      <SidebarMenuItem key={item.name} className='space-y-3 px-4'>
                        <SidebarMenuButton
                          asChild
                          className={cn('gap-4 py-4 px-4 text-xl rounded-3xl text-white  h-13 hover:bg-transparent hover:text-white', isActive && 'bg-blue-800', isActive && 'text-white')}
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