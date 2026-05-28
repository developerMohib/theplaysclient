import React from 'react';

const NavbarSkeleton = () => {
    return (
        <div className="flex items-center gap-3 animate-pulse">
            <div className="flex h-9 w-40 items-center rounded bg-gray-800 px-4">
                <div className="h-4 w-24 rounded bg-gray-700" />
            </div>

            <div className="flex h-9 w-23 items-center rounded border border-gray-800 bg-gray-900 px-3">
                <div className="h-4 w-14 rounded bg-gray-700" />
            </div>
        </div>
    );
};

export default NavbarSkeleton;