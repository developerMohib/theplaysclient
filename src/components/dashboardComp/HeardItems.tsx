"use client";

import { useMe } from "@/src/hooks/useMe";
import Image from "next/image";

const HeaderItems = () => {
    const { data, isLoading } = useMe();
if (isLoading || !data) return <p>Loading...user in header</p>;

    return (
        <div className="flex items-center justify-between border-b p-4">
            <div>
                <h1 className="text-2xl font-semibold">
                    My App
                </h1>

                <p className="text-sm text-gray-600">
                    Welcome, <span className="text-orange-400">{data?.data?.name}</span>
                </p>
            </div>

            <Image width={50} height={50}
                src={data?.data?.image || "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"}
                alt={data?.data?.name || "User Avatar"}
                className="object-cover w-12 h-12 rounded-full ring ring-gray-300"
            />
        </div>
    );
};

export default HeaderItems;