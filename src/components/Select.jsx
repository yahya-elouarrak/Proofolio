// import { useId, useState } from "react"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// export default function Select({onchange}) {
//   const id = useId()
//   const [selectedTemplate, setSelectedTemplate] = useState("")

//   return (
//     <div className="*:not-first:mt-2 w-full">
//       <Select value={selectedTemplate} onchange={()=>{setSelectedTemplate}}>
//         <SelectTrigger id={id}>
//           <SelectValue placeholder="Select template" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="1">default</SelectItem>
//           <SelectItem value="2" className={"opacity-50 cursor-not-allowed pointer-events-none"}>elegant (coming soon)</SelectItem>
//         </SelectContent>
//       </Select>
//     </div>
//   )
// }
