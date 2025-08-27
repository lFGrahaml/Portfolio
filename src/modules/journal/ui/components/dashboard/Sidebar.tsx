'use client';

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils";
import { BookIcon, FileIcon, PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardProfileButton from "./Profile-button";

const firstGroup = [
  {
    icon: BookIcon,
    label: 'journal',
    href: '/commi-journal/journal'
  },
  {
    icon: PlusCircleIcon,
    label: 'new page',
    href: '/commi-journal/journal/new-page'
  }
]

// ! TEMP: this group should eventually be replaced with recent notes
const secondGroup = [
  {
    icon: FileIcon,
    label: 'page 1',
    href: '/commi-journal/journal/page?p=1'
  },
  {
    icon: FileIcon,
    label: 'page 2',
    href: '/commi-journal/journal/page?p=2'
  }
  ,
  {
    icon: FileIcon,
    label: 'page 3',
    href: '/commi-journal/journal/page?p=3'
  }
]

export const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar className="shadow-md rounded-4xl">
      <SidebarHeader className="text-sidebar-accent-foreground">
        <Link href={'/commi-journal'} className="flex items-center gap-2 px-2 pt-2">
          <Image src={'/assets/logo.png'} alt="Commi" width={40} height={40} className="rounded-full"/>
          <h2 className="font-bold text-3xl text-primary">Commi</h2>
        </Link>
      </SidebarHeader>

      <div className="px-4 py-2">
        <Separator className="opacity-25 shadow-md text-gray-300" />
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {firstGroup.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className={cn("h-10 border border-transparent hover:border-[#c0825a]/10 ", pathname === item.href && " bg-primary-foreground text-")}
                  >

                    <Link href={item.href}>
                    <item.icon className="size-5 text-primary"/>
                      <span className="text-sm font-medium tracking-tight text-primary">
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="px-4 py-2">
          <Separator className="opacity-10 text-gray-300" />
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondGroup.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className={cn("h-10 border border-transparent hover:border-[#c0825a]/10 ", pathname === item.href && " bg-primary-foreground text-")}
                  >

                    <Link href={item.href}>
                    <item.icon className="size-5 text-primary"/>
                      <span className="text-sm font-medium tracking-tight text-primary">
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <DashboardProfileButton />
      </SidebarFooter>

    </Sidebar>
  )
}