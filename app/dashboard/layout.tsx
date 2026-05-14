
import AdminSidebar from "@/components/dashboard/admin/AdminSidebar";

const layoutPublic = async ({ children }: { children: React.ReactNode }) => {


    return (
        <div className="min-h-screen  bg-slate-950 text-white">
              {/* Sidebar */}
              <AdminSidebar />
              {/* Main Content */}
              <main className="flex-1 p-6 ml-64">
                {children}
              </main>
            </div>
    );
};

export default layoutPublic;