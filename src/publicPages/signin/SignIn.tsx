'use client'

import { axiosInstance } from '@/src/hooks/axiosInstance'
import { getErrorMessage } from '@/src/utilitis/axiosError'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'

const SignIn = () => {
    const router = useRouter()
   const searchParams = useSearchParams()
    const redirect = searchParams.get('redirect')
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setLoading(true)

            const response = await axiosInstance.post('/auth/login', formData)

            if (response.data.success) {
                toast.success(response.data.message)

                // redirect after login
                router.push(redirect || '/dashboard')
            }
        } catch (error) {
            const message = getErrorMessage(error)
            toast.error(message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center pt-16">
            <div className="w-full max-w-sm space-y-4 border p-6">
                <h1 className="text-xl font-semibold text-center">
                    Login
                </h1>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="space-y-1">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border p-2"
                        />
                    </div>

                    <div className="space-y-1">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full border p-2"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full border p-2"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <p className="text-center">
                    Don&apos;t have an account?{' '}
                    <Link href="/register" className="underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignIn