'use client';

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftCloseIcon, PanelLeftIcon, SearchIcon } from "lucide-react";
import DashboardCommand from "./Command";
import { useEffect, useState } from "react";

const DashboardNavbar = () => {
  const {state, toggleSidebar, isMobile} = useSidebar();
  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandOpen((open) => !open);
      }
    }

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [])

  return (
    <>
    <DashboardCommand open={isCommandOpen} setOpen={setIsCommandOpen} />
    <nav className="flex items-center px-4 py-3 gap-x-2 border-b bg-background">
      <Button
        variant={'outline'}
        onClick={toggleSidebar}
        className="size-9 cursor-pointer"
      >
        {(state === "collapsed" || isMobile)
          ? <PanelLeftIcon />
          : <PanelLeftCloseIcon />
        }
      </Button>

      <Button
        variant={'outline'}
        size={'sm'}
        onClick={() => setIsCommandOpen((open) => !open)}
        className="h-9 w-[240px] justify-start font-normal text-muted-foreground hover:text-muted-foreground cursor-pointer"
      >
        <SearchIcon />
        Search
        <kbd className="inline-flex items-center ml-auto pointer-events-none select-none h-5 gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span>&#8984;K</span>
        </kbd>
      </Button>
    </nav>
    </>
  )
}

export default DashboardNavbar
