import Sidebar from "@/components/ui/Sidebar"
import Navbar from "@/components/ui/Navbar"

function layout({children}) {
  return (
    <main className="grid lg:grid-cols-2">
      {/* first col hides on small screen */}
      <div className="hidden lg:block lg:span-col-1 lg:min-h-screen">
        <Sidebar></Sidebar>
      </div>
      {/* second col hides dropdown on big screen */}
      <div className="lg: span-col-1">
        <Navbar></Navbar>
        <div classNAme="py-16 px-4 sm:px-8 lg:py-16">{children}</div>
      </div>
      
    </main>
  );
}

export default layout
