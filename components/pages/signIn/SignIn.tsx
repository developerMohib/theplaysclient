'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Eye, EyeOff, Gamepad2 } from 'lucide-react'

const SignIn = () => {
    const router = useRouter()

    const [showPassword, setShowPassword] =
        useState(false)

    const [loading, setLoading] =
        useState(false)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()

        try {
            setLoading(true)

            /**
             * API CALL HERE
             */

            console.log(formData)

            /**
             * SAVE TOKEN
             */

            router.push('/booking')
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="flex min-h-screen items-center justify-center bg-black px-4 py-10 text-white">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                {/* HEADER */}

                <div className="mb-8 text-center">
                    <div className="mb-5 flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">
                            <Gamepad2 className="h-8 w-8 text-cyan-400" />
                        </div>
                    </div>

                    <h1 className="text-4xl font-black">
                        Welcome Back
                    </h1>

                    <p className="mt-3 text-gray-400">
                        Login to continue booking your
                        gaming sessions
                    </p>
                </div>

                {/* FORM */}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    {/* EMAIL */}

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-300">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400"
                        />
                    </div>

                    {/* PASSWORD */}

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-300">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={
                                    showPassword
                                        ? 'text'
                                        : 'password'
                                }
                                name="password"
                                value={
                                    formData.password
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="Enter your password"
                                required
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-12 outline-none transition focus:border-cyan-400"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(
                                        !showPassword
                                    )
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                            >
                                {showPassword ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* BUTTON */}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-xl bg-cyan-500 py-3 font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {loading
                            ? 'Logging in...'
                            : 'Login'}
                    </button>
                </form>

                {/* FOOTER */}

                <p className="mt-6 text-center text-sm text-gray-400">
                    Don&apos;t have an account?{' '}
                    <Link
                        href="/register"
                        className="font-semibold text-cyan-400 hover:underline"
                    >
                        Create account
                    </Link>
                </p>
            </div>
        </section>
    )
}

export default SignIn