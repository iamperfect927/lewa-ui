 import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader } from "@/components/ui/sidebar"
 import { Menu } from "lucide-react"
//  import { usePathname } from "next/navigation"

 import { sidebarConstants } from "@/lib/sidebar-const"

const SideBar = () => {
    // const pathName = usePathname()
  return (
    <Sidebar collapsible="icon" side="left" className="bg-accent">
        
        <div className="m-2 rounded-4xl p-2">
            <SidebarHeader className="flex-row-reverse">                
                    <h1 className="text-2xl justify-between text-white font-semibold">Super Admin</h1>
                    <button>
                        <Menu className="h-6 w-6 text-white"/>
                    </button>
                
            </SidebarHeader>
            <SidebarContent >
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarConstants.map((item) => (
                                <SidebarMenuItem key={item.name}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.name}</span>
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