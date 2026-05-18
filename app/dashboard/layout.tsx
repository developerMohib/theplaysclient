
import AdminSidebar from "@/components/dashboard/admin/AdminSidebar";
import UserDashboardHeader from "@/components/dashboard/user/UserDashboardHeard";
import Usersidebar from "@/components/dashboard/user/Usersidebar";

const layoutPublic = async ({ children }: { children: React.ReactNode }) => {
const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role : 'user',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',
}

    return (
        <div className="min-h-screen  bg-slate-950 text-white">
          <UserDashboardHeader user={user} />
            {user.role === 'admin' && <AdminSidebar />}
            {user.role === 'user' && <Usersidebar />}
              <main className="flex-1 p-6 ml-64">
                {children}
              </main>
            </div>
    );
};

export default layoutPublic;