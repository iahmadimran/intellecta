'use client';

import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

const CompanionsLibrary = () => {
  const { isSignedIn } = useUser()
  const router = useRouter()

  if (!isSignedIn) {
    router.push('/sign-in')
  }
  return (
    <div>
      CompanionsLibrary
    </div>
  )
}

export default CompanionsLibrary
