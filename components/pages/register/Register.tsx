'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Eye, EyeOff, Gamepad2 } from 'lucide-react'
import { axiosInstance } from '@/src/hooks/axiosInstance'
import { toast } from 'sonner'
import { getErrorMessage } from '@/components/utils/configAxios'

const RegisterPage = () => {
    const router = useRouter()

    const [showPassword, setShowPassword] = useState(false)

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await axiosInstance.post('/auth/register', formData);
            if (response.data.success) {
                toast.success(response.data.message)
            }

            router.push(`/dashboard/${response.data.user.role}`);
        } catch (error) {
            const message = getErrorMessage(error);
            toast.error(message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="flex items-center justify-center bg-black px-4 py-10 text-white">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                {/* HEADER */}

                <div className="mb-8 text-center">
                    <div className="mb-5 flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">
                            <Gamepad2 className="h-8 w-8 text-cyan-400" />
                        </div>
                    </div>

                    <h1 className="text-4xl font-black">
                        Create Account
                    </h1>

                    <p className="mt-3 text-gray-400">
                        Register and start booking your
                        favorite games
                    </p>
                </div>

                {/* FORM */}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    {/* NAME */}

                    <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400"
                        />
                    </div>

                    {/* EMAIL */}

                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400"
                        />
                    </div>

                    {/* PASSWORD */}

                    <div>
                        <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-300">
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
                                id="password"
                                autoComplete='password'
                                value={
                                    formData.password
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="Create password"
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
                            ? 'Creating account...'
                            : 'Register'}
                    </button>
                </form>

                {/* FOOTER */}

                <p className="mt-6 text-center text-sm text-gray-400">
                    Already have an account?{' '}
                    <Link
                        href="/signin"
                        className="font-semibold text-cyan-400 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </section>
    )
}

export default RegisterPage