import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Home, MessagesSquare, MoreHorizontal } from "lucide-react"

import { UserButton } from "@/features/auth/components/user-button"
import { useWorkspaceId } from "@/hooks/use-workspace-id"

import { SidebarButton } from "./siderbar-button"
import { WorkspaceSwitcher } from "./workspace-switcher"

export const Sidebar = () => {
  const pathname = usePathname()
  const workspaceId = useWorkspaceId()

  return (
    <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[9px] pb-[4px]">
      <WorkspaceSwitcher />
      <Link href={`/workspace/${workspaceId}`}>
        <SidebarButton
          icon={Home}
          label="Home"
          isActive={pathname.includes("/workspace/")}
        />
      </Link>
      <Link href={`/workspace/${workspaceId}`}>
        <SidebarButton icon={MessagesSquare} label="DMs" />
      </Link>
      <Link href={`/workspace/${workspaceId}`}>
        <SidebarButton icon={Bell} label="Activity" />
      </Link>
      <Link href={`/workspace/${workspaceId}`}>
        <SidebarButton icon={MoreHorizontal} label="More" />
      </Link>
      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <UserButton />
      </div>
    </aside>
  )
}
