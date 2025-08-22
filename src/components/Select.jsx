import { useId } from "react"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Select>
        <SelectTrigger id={id}>
          <SelectValue placeholder="Select template" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">minimal</SelectItem>
          <SelectItem value="2">elegant</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
