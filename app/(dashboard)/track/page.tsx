import NewActivity from "./_components/new-activity"

const TrackingPage = () => {
  return (
    <div className="mx-auto container py-4 space-y-12">
      <NewActivity clients={[{name: "manasse", id: "jlskjflmsfj"}]} projects={[{id: "heleel", name: "daniel"}]}/>
    </div>
  )
}

export default TrackingPage