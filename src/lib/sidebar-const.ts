import { LayoutDashboard, School, Database, Users } from "lucide-react"


export const sidebarConstants = [
    {
        name:'Dashboard',
        icon:LayoutDashboard,
        url:'/'
    },
    {
        name:'Schools',
        icon:School,
        url:'/schools'
    },
    {
        name:'Static data',
        icon: Database,
        url:'/static-data'
    },
    {
        name:'Users',
        icon:Users,
        url:'/users'
    }
]