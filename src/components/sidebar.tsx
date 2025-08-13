 'use client'
 
 import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarGroupLabel } from "@/components/ui/sidebar"
 import { Menu } from "lucide-react"
 import { usePathname } from "next/navigation"

 import { sidebarConstants } from "@/lib/sidebar-const"

const SideBar = () => {
    const pathName = usePathname()
    
    // Add this debug log
    console.log('Current pathname:', pathName)
    console.log('Menu items:', sidebarConstants.map(item => ({
        name: item.name,
        url: item.url,
        isActive: pathName === item.url,
        pathnameType: typeof pathName,
        urlType: typeof item.url
    })))
    
  return (
    <Sidebar collapsible="offcanvas" side="left">           
        <div className="p-2 m-2">
            <SidebarContent >
                <SidebarGroup>
                    <SidebarGroupLabel>
                        <button>
                            <Menu className="h-6 w-6 text-white"/>
                        </button>                
                        <h1 className="text-2xl text-white font-semibold">Super Admin</h1>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarConstants.map((item) => (
                                <SidebarMenuItem key={item.name} >
                                    <SidebarMenuButton 
                                        asChild
                                        isActive={pathName === item.url}
                                        className="my-5 text-2xl text-white hover:bg-blue-800 data-[active]:text-white h-10">
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
  )
}

export default SideBar