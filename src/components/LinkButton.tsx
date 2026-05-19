"use client"
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
type AnimatedButtonProps = {
    href: string
    text: string
    className?: string
}
const LinkButton = ({
    href,
    text,
    className = "",
}: AnimatedButtonProps) => {
    return (
        <Link
            href={href}
            className={`${className} group relative inline-flex items-center justify-start overflow-hidden rounded border border-white/20 bg-red-600 px-6 py-3 pl-4 pr-12 text-lg font-semibold text-white backdrop-blur transition-all duration-150 ease-in-out hover:bg-white/20 hover:pl-10 hover:pr-6`}
        >
            {/* Right Arrow */}
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <ArrowRight className="h-5 w-5 text-white" />
            </span>

            {/* Left Arrow */}
            <span className="absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0">
                <ArrowRight className="h-5 w-5 text-white" />
            </span>

            {/* Text */}
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                {text}
            </span>
        </Link>
    );
};

export default LinkButton;