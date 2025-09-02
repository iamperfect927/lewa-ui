"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { subjects } from "@/lib/staticDataSectorSubject"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { Input } from "./ui/input"

export default function SubjectsTabs() {
  const [page, setPage] = useState<number>(1) 
  const itemsPerPage = 10

  const renderPaginated = (list: string[]) => {
    const start = (page - 1) * itemsPerPage
    const end = start + itemsPerPage
    const currentItems = list.slice(start, end)
    const totalPages = Math.ceil(list.length / itemsPerPage)

    return (
      <div className="bg-white rounded-b-3xl p-6 min-h-[400px] flex flex-col justify-between">
        <ul className="space-y-2 text-black">
          {currentItems.map((subject, i) => (
            <li key={i} className="text-base font-medium">
              {subject}
            </li>
          ))}
        </ul>

        <div className="flex justify-end items-center space-x-2 mt-6">
          <div className="rounded-lg p-2 flex items-center space-x-2">
            <Button
              variant="default"
              size="default"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <ChevronLeft className="h-4 w-4 text-black" />
            </Button>

            {[...Array(totalPages)].map((_, idx) => {
              const pageNum = idx + 1
              const isCurrentPage = page === pageNum
              
              if (pageNum > 3 && pageNum < totalPages) {
                if (pageNum === 4) {
                  return <span key={idx} className="px-2 text-gray-500">...</span>
                }
                return null
              }

              return (
                <Button
                  key={idx}
                  size="default"
                  variant={isCurrentPage ? "default" : "ghost"}
                  onClick={() => setPage(pageNum)}
                  className={`h-8 w-8 p-0 ${
                    isCurrentPage 
                      ? "bg-blue-200 rounded-xl text-white hover:bg-blue-600" 
                      : "hover:bg-gray-200 rounded-xl"
                  }`}
                >
                  {pageNum}
                </Button>
              )
            })}

            <Button
              variant="default"
              size="default"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <ChevronRight className="h-4 w-4 text-black" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-100 rounded-lg w-full">
      <div className="bg-blue-200 p-2 rounded-t-2xl flex justify-between items-center">
            <h2 className="px-5 text-2xl text-gray-900 font-bold">Schools</h2>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 h-4 w-4" />
                <Input className="w-[200px] rounded-3xl bg-slate-100 pl-10 placeholder:text-blue-300 border-0" placeholder="Search schools" />      
            </div>
        </div>
      <Tabs defaultValue="Grammar" className="w-full p-4">
        <TabsList className="grid w-full grid-cols-4 bg-transparent">
          <TabsTrigger 
            value="Grammar" 
            className="bg-blue-200 hover:bg-gray-200 data-[state=active]:bg-white data-[state=active]:text-black rounded-tr-2xl py-2 px-4"
          >
            Grammar
          </TabsTrigger>
          <TabsTrigger 
            value="Technical" 
            className="bg-blue-200 hover:bg-gray-200 data-[state=active]:bg-white data-[state=active]:text-black rounded-tr-2xl px-4 py-2"
          >
            Technical
          </TabsTrigger>
          <TabsTrigger 
            value="Commercial" 
            className="bg-blue-200 hover:bg-gray-200 data-[state=active]:bg-white data-[state=active]:text-black rounded-tr-2xl px-4 py-2"
          >
            Commercial
          </TabsTrigger>
          <TabsTrigger 
            value="Comprehensive" 
            className="bg-blue-200 hover:bg-gray-200 data-[state=active]:bg-white data-[state=active]:text-black rounded-tr-2xl px-4 py-2"
          >
            Comprehensive
          </TabsTrigger>
        </TabsList>

        {Object.entries(subjects).map(([key, list]) => (
          <TabsContent key={key} value={key} className="mt-1">
            {renderPaginated(list)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
