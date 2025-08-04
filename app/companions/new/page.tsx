import CompanionForm from "@/components/CompanionForm"

const NewCompanion = () => {
  return (
    <main className="min-lg:w-2/3 min-md:w-2/3 items-center justify-center">
      <article className="w-full min-h-screen flex flex-col gap-4">
        <h1>Companion Builder</h1>

        <CompanionForm />
      </article>
    </main>
  )
}

export default NewCompanion
