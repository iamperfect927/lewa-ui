 import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader } from "@/components/ui/sidebar"
 import { Menu } from "lucide-react"
//  import { usePathname } from "next/navigation"

 import { sidebarConstants } from "@/lib/sidebar-const"

const SideBar = () => {
    // const pathName = usePathname()
  return (
    <Sidebar collapsible="icon" className="bg-blue-700" side="left">
        <div className="flex-col gap-3">
        <SidebarHeader>
            <div>
                <h2 className="text-lg text-white font-semibold">Super Admin</h2>
                <button>
                    <Menu className="h-4 w-4 text-white"/>
                </button>
            </div>
        </SidebarHeader>
        <SidebarContent>
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