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
                    src="/theplaysbd.PNG"
                    alt="The Plays Logo"
                />
            </div>
        </Link>
    )
}