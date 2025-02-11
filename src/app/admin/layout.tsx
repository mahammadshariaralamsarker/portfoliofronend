'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className=" -ml-20 flex ">
      {/* Sidebar */}
      <aside className="w-60 text-center bg-gray-900 text-white p-5 max-h-full">
      <nav className="w-52">
        <ul className="space-y-3">
          {[
            { name: "Projects", path: "/admin/projects" },
            { name: "Blogs", path: "/admin/blogs" },
            { name: "Message", path: "/admin/messages" },
          ].map((item) => (
            <li
              key={item.path}
              className={`p-2 rounded ${
                pathname === item.path ? "bg-blue-500" : "bg-gray-700"
              }`}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>

      {/* Main Content */}
      <div className="  max-w-3xl mx-auto   overflow-y-auto">
        <main className=" ">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
