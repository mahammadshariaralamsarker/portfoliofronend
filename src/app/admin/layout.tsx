import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="  ">
      {/* Sidebar */}
      <aside className="w-60  bg-gray-900 text-white p-5 fixed h-screen">
        <nav className="mt-5 ">
          <ul className="space-y-3">
            <li className="p-2 hover:bg-gray-700 rounded">
              <Link href="/admin/projects">Projects</Link>
            </li>
            <li className="p-2 hover:bg-gray-700 rounded">
              <Link href="/admin/blogs">Blogs</Link>
            </li>
            <li className="p-2 hover:bg-gray-700 rounded">
              <Link href="/admin/messages">Message</Link>
            </li>
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
