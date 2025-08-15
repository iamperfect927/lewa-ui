import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "./ui/input"
import { Search } from "lucide-react"

const schools = [
  {
    name: "Lycee Bilingue",
    region: "North-West",
    students: 450,
    status: "Active"
  },
  {
    name: "Green Valley School",
    region: "Central",
    students: 370,
    status: "Active"
  },
  {
    name: "Riverdale Lycée School",
    region: "East",
    students: 510,
    status: "Active"
  },
  {
    name: "Pioneer Academy",
    region: "South-West",
    students: 300,
    status: "Inactive"
  }
]

const SchoolsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm rounded-t-2xl w-full">
        <div className="bg-blue-200 p-2 rounded-t-2xl flex justify-between items-center">
            <h2 className="text-2xl text-gray-900 font-bold">Schools</h2>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 h-4 w-4" />
                <Input className="w-[200px] rounded-3xl bg-slate-100 pl-10 placeholder:text-blue-300 border-0" placeholder="Search schools" />      
            </div>
        </div>
      <div className="px-6 pb-6">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-200">
              <TableHead className="text-left font-semibold text-gray-900">School Name</TableHead>
              <TableHead className="text-left font-semibold text-gray-900">Region</TableHead>
              <TableHead className="text-center font-semibold text-gray-900">Students</TableHead>
              <TableHead className="text-center font-semibold text-gray-900">Status</TableHead>
              <TableHead className="text-right font-semibold text-gray-900">Actions</TableHead>
            </TableRow>
          </TableHeader>
          
          <TableBody>
            {schools.map((school, index) => (
              <TableRow key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <TableCell className="text-left text-gray-900 font-medium">
                  {school.name}
                </TableCell>
                <TableCell className="text-left text-gray-700">
                  {school.region}
                </TableCell>
                <TableCell className="text-center text-gray-700">
                  {school.students}
                </TableCell>
                <TableCell className="text-center">
                  <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                    school.status === "Active" 
                      ? "bg-blue-100 text-blue-800" 
                      : "bg-orange-100 text-orange-800"
                  }`}>
                    {school.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-4">
                    <button className="text-green-600 hover:text-green-800 font-medium text-sm">
                      View
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800 font-medium text-sm">
                      Delete
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="mt-6">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-xl">
            View All
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SchoolsTable