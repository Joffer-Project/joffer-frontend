import { cookies } from "next/headers"

import { TalentHome } from "./components/talent-home"

export default function TalentPage() {
  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <>
      <div className="flex-col flex h-screen">
        <TalentHome
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}