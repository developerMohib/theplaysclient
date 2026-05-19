import Image from "next/image";
import Link from "next/link";

export function Logo() {
    return (
        <Link href="/" className="group z-60 flex items-center gap-2">
            <div className="flex items-center justify-center rounded-xl">
                <Image
                    width={40}
                    height={40}
                    className="h-9 w-auto"
                    src="/logo-the-plays.png"
                    alt="The Plays Logo"
                />
            </div>

            <span className="hidden bg-linear-to-r from-red-500 via-orange-400 to-pink-400 bg-clip-text text-xl font-bold text-transparent sm:inline">
                The Plays
            </span>
        </Link>
    )
}