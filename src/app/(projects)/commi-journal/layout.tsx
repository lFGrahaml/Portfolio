import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardNavbar from "@/modules/journal/ui/components/dashboard/Navbar";
import { DashboardSidebar } from "@/modules/journal/ui/components/dashboard/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-col h-screen w-screen bg-muted">
        <DashboardNavbar />
        {children}
      </main>
    </SidebarProvider>
  );
}

export default Layout