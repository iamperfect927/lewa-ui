'use client'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarGroupLabel } from "@/components/ui/sidebar"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

import { sidebarConstants } from "@/lib/sidebar-const"

const SideBar = () => {
    const pathName = usePathname()
  return (
    <div className="rounded-3xl">
        <Sidebar collapsible="icon" side="left" className="bg-accent">
        
        <div className="m-2 rounded-4xl p-2">
            <SidebarContent >
                <SidebarGroup>
                    <SidebarGroupLabel>
                        <button>
                            <Menu className="h-6 w-6 text-white"/>
                        </button>
                        <h1 className="text-2xl justify-between text-white font-semibold">Super Admin</h1>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarConstants.map((item) => (
                                <SidebarMenuItem key={item.name} >
                                    <SidebarMenuButton 
                                        asChild
                                        isActive={pathName === item.url}
                                        className="my-3 text-2xl text-white hover:bg-blue-800 data-[active]:text-white">
                                        <a href={item.url} >                                           
                                            <button><item.icon className="h-6 w-6"/></button>
                                            <span className="">{item.name}</span>                                           

                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </div>
       
    </Sidebar>
    </div>
    
  )
}

export default SideBar