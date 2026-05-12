import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const layoutPublic = async ({ children }: { children: React.ReactNode }) => {


    return (
        <>
            <Navbar />
            <main className="container mx-auto">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default layoutPublic;