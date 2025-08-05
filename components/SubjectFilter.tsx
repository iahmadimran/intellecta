'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { subjects } from "@/constants"
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"


const SubjectFilter = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [subject, setSubject] = useState('')

  useEffect(() => {
    let newUrl = ''
    if (subject !== 'all') {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: subject,
      });

      router.push(newUrl, { scroll: false });
    } else {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });

      router.push(newUrl, { scroll: false });
    }
  }, [subject]);
  return (
    <div>
      <Select value={subject} onValueChange={setSubject}>
        <SelectTrigger className="input capitalize">
          <SelectValue placeholder="Select Subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">
            All Subjects
          </SelectItem>
          {subjects.map((subject) => (
            <SelectItem key={subject} value={subject} className="capitalize">
              {subject}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SubjectFilter
