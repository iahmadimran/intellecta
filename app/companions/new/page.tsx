import CompanionForm from "@/components/CompanionForm"
import { newCompanionPermissions } from "@/lib/actions/companion.actions"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

const NewCompanion = async () => {
  const { userId } = await auth()
  if (!userId) {
    redirect('/sign-in')
  }

  const canCreateCompanion = await newCompanionPermissions()

  return (
    <main className="min-lg:w-2/3 min-md:w-2/3 items-center justify-center">
      {canCreateCompanion ? (
        <article className="w-full min-h-screen flex flex-col gap-4">
          <h1>Companion Builder</h1>

          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit">
          <Image
            src={'/images/limit.svg'} 
            alt="limit"
            width={350}
            height={210}
          />
          <div className="cta-badge">
            Upgrade Your Plan
          </div>
          <h1>You&apos;ve Reached Your Limit</h1>
          <p>You&apos;ve reached your companion limit. Upgrade to create more companions and premium features.</p>

          <Link href={'/subscriptions'} className="btn-primary flex justify-center items-center w-full bg-[#FE5933] font-bold">
            Upgrade My Plan
          </Link>
        </article>
      )}
    </main>
  )
}

export default NewCompanion
