'use client'

import { axiosInstance } from '@/src/hooks/axiosInstance'
import { getErrorMessage } from '@/src/utilitis/axiosError'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'

const RegisterPage = () => {
    const router = useRouter()

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

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()

        try {
            setLoading(true)
            const response = await axiosInstance.post(
                '/auth/register',
                formData
            )

            if (response.data.success) {
                toast.success(response.data.message)
                router.push("/")
            }
        } catch (error) {
            const message = getErrorMessage(error)
            toast.error(message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex mt-10 items-center justify-center p-4">
            <div className="w-full max-w-sm space-y-4 border p-6 rounded">
                <h1 className="text-2xl font-semibold text-center">
                    Register
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <div className="space-y-1">
                        <label htmlFor="name">Name</label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="email">Email</label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full border p-2 rounded"
                    >
                        {loading
                            ? 'Creating account...'
                            : 'Register'}
                    </button>
                </form>

                <p className="text-center">
                    Already have an account?{' '}
                    <Link href="/signin" className="underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage