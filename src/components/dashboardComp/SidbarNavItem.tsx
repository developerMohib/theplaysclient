"use client";

import Link from "next/link";

import { useLogout, useMe } from "@/src/hooks/useMe";
import {
  adminPrivateNavItems,
  userPrivateNavItems,
} from "@/src/utilitis/data";

const SidebarNavItem = () => {
  const { mutate: logout, isPending } = useLogout();

  const { data, isLoading } = useMe();

  if (isLoading || !data) {
    return <p>Loading...user side bar</p>;
  }

  const role = data?.data?.role;

  let navItems = userPrivateNavItems;

  if (role === "admin") {
    navItems = adminPrivateNavItems;
  }

  const handleLogout = async () => {
    logout();
  };

  return (
    <div>
      <h1 className="capitalize">{role} Panel</h1>

      <ul className="w-fit space-y-2 rounded border p-4">
        {navItems?.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="block rounded px-3 py-2 hover:bg-gray-100 hover:text-black"
            >
              {item.label}
            </Link>
          </li>
        ))}

        <li>
          <button
            className="w-full rounded px-3 py-2 text-left hover:bg-gray-100 hover:text-black"
            onClick={handleLogout}
            disabled={isPending}
          >
            {isPending ? "Logging out..." : "Logout"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SidebarNavItem;