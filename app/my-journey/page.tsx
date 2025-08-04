'use client';

import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

const Profile = () => {
  const { isSignedIn } = useUser()
  const router = useRouter()

  if (!isSignedIn) {
    router.push('/sign-in')
  }
  return (
    <div>
      Profile
    </div>
  )
}

export default Profile
