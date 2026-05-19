'use client'

import { useState } from 'react'
import {
    CheckCircle,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useMe } from '@/src/hooks/useMe'
import { useOneGame } from '@/src/hooks/useGames'

type TimeSlot = { id: number, label: string, hour: number }
const generateSlots = (): TimeSlot[] =>
    Array.from({ length: 13 }, (_, i) => {
        const hour = i + 10
        return {
            id: hour,
            hour,
            label: `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? 'PM' : 'AM'
                }`,
        }
    })

const getToday = () => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return today
}
/* ----------------------------- COMPONENT ------------------------------ */

export default function BookNow() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { data } = useMe()
    const gameId = searchParams.get('game') || ''

    const {
        data: mygame,
        isLoading,
        error,
    } = useOneGame(gameId)

    const [slot, setSlot] = useState<TimeSlot | null>(null)
    const [date, setDate] = useState<Date | null>(getToday())
    const [month, setMonth] = useState(new Date())
    const [paymentMethod, setPaymentMethod] = useState<'online' | 'cash'>('online')
    const [done, setDone] = useState(false)

    const slots = generateSlots()
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const daysInMonth = new Date(
        month.getFullYear(),
        month.getMonth() + 1,
        0
    ).getDate()

    const isPastDate = (d: Date) => d < today
    const isPastTime = (s: TimeSlot) => {
        if (!date) return false
        const now = new Date()
        const slotTime = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            s.hour
        )
        return slotTime < now
    }

    /* -------------------------- MONTH CONTROL -------------------------- */
    const handlePreviousMonth = () => {
        const current = new Date()
        const isCurrentMonth =
            month.getMonth() === current.getMonth() &&
            month.getFullYear() === current.getFullYear()

        if (isCurrentMonth) return
        setMonth(
            new Date(
                month.getFullYear(),
                month.getMonth() - 1
            )
        )
    }

    const handleNextMonth = () => {
        setMonth(
            new Date(
                month.getFullYear(),
                month.getMonth() + 1
            )
        )
    }
    
    const handleConfirm = async () => {
        if (!data?.success) {
            router.push(
                `/signin?redirect=${pathname}?game=${mygame?._id}`
            )
            return
        }

        if (!date || !mygame || !slot) return

        try {
            const bookingData = {
                user: data?.data?.id,
                game: mygame._id,
                date: date.toISOString(),
                slot: slot.hour,
                paymentMethod,
            }

            console.log(bookingData)

            // await createBooking(bookingData)

            setDone(true)

            setTimeout(() => {
                setDone(false)
                setDate(getToday())
                setSlot(null)
            }, 2000)
        } catch (error) {
            console.log(error)
        }
    }

    if (isLoading) {
        return (
            <div className="py-10 text-center">
                Loading...
            </div>
        )
    }

    if (error) {
        return (
            <div className="py-10 text-center text-red-500">
                Something went wrong
            </div>
        )
    }

    return (
        <div className="min-h-screen px-4 py-8 text-white">
            {/* HEADER */}
            <div className="mx-auto mb-10 max-w-7xl">
                <h1 className="mb-2 text-3xl font-bold">
                    Book Your Slot
                </h1>

                <p className="text-sm text-gray-400">
                    Select date, game, time, and payment
                    method
                </p>
            </div>

            {/* MAIN GRID */}
            <div
                className={`mx-auto grid max-w-7xl gap-6 ${searchParams.get('game')
                    ? 'lg:grid-cols-3'
                    : 'lg:grid-cols-4'
                    }`}
            >

                <div className="rounded-lg border border-gray-700 p-4">
                    <h3 className="mb-4 font-semibold">
                        Select Date
                    </h3>

                    {/* MONTH CONTROLS */}
                    <div className="mb-4 flex items-center justify-between">
                        <button
                            onClick={handlePreviousMonth}
                            className="rounded p-1 transition hover:bg-gray-800"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <span className="text-sm font-medium">
                            {month.toLocaleString('default', {
                                month: 'short',
                                year: 'numeric',
                            })}
                        </span>

                        <button
                            onClick={handleNextMonth}
                            className="rounded p-1 transition hover:bg-gray-800"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>

                    {/* CALENDAR */}
                    <div className="grid grid-cols-7 gap-1">
                        {Array.from({
                            length: daysInMonth,
                        }).map((_, i) => {
                            const d = new Date(
                                month.getFullYear(),
                                month.getMonth(),
                                i + 1
                            )

                            const disabled = isPastDate(d)

                            const isSelected =
                                date?.toDateString() ===
                                d.toDateString()

                            return (
                                <button
                                    key={i}
                                    disabled={disabled}
                                    onClick={() => {
                                        setDate(d)
                                        setSlot(null)
                                    }}
                                    className={`rounded p-2 text-xs transition ${disabled
                                        ? 'cursor-not-allowed text-gray-600'
                                        : isSelected
                                            ? 'bg-blue-600 font-semibold text-white'
                                            : 'hover:bg-gray-800'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* -------------------------- TIME SLOTS -------------------------- */}

                <div className="rounded-lg border border-gray-700 p-4">
                    <h3 className="mb-4 font-semibold">
                        Select Time
                    </h3>

                    <div className="max-h-72 space-y-1 overflow-y-auto">
                        {slots.map(s => {
                            const disabled =
                                !mygame || isPastTime(s)

                            return (
                                <button
                                    key={s.id}
                                    disabled={disabled}
                                    onClick={() => setSlot(s)}
                                    className={`w-full rounded p-2 text-left text-sm transition ${disabled
                                        ? 'cursor-not-allowed text-gray-600'
                                        : slot?.id === s.id
                                            ? 'bg-blue-600 font-medium text-white'
                                            : 'hover:bg-gray-800'
                                        }`}
                                >
                                    {s.label}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* ----------------------- SUMMARY & PAYMENT ---------------------- */}

                <div className="rounded-lg border border-gray-700 p-4">
                    <h3 className="mb-4 font-semibold">
                        Summary
                    </h3>

                    {/* SUMMARY */}
                    <div className="mb-4 space-y-3 border-b border-gray-700 pb-4 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-400">
                                Date
                            </span>

                            <span>
                                {date?.toDateString() || '-'}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-400">
                                Game
                            </span>

                            <span>{mygame?.name || '-'}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-400">
                                Time
                            </span>

                            <span>{slot?.label || '-'}</span>
                        </div>
                    </div>

                    {/* PAYMENT METHOD */}
                    <div className="mb-4">
                        <p className="mb-2 text-sm font-semibold">
                            Payment Method
                        </p>

                        <div className="space-y-2 text-sm">
                            <label className="flex cursor-pointer items-center gap-2">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="online"
                                    checked={
                                        paymentMethod === 'online'
                                    }
                                    onChange={() =>
                                        setPaymentMethod('online')
                                    }
                                    className="h-4 w-4"
                                />

                                Mobile Payment
                            </label>

                            <label className="flex cursor-pointer items-center gap-2">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cash"
                                    checked={
                                        paymentMethod === 'cash'
                                    }
                                    onChange={() =>
                                        setPaymentMethod('cash')
                                    }
                                    className="h-4 w-4"
                                />

                                Cash
                            </label>
                        </div>
                    </div>

                    {/* CONFIRM BUTTON */}
                    <button
                        onClick={handleConfirm}
                        disabled={!date || !mygame || !slot}
                        className={`w-full rounded py-2 text-sm font-medium transition ${!date || !mygame || !slot
                            ? 'cursor-not-allowed bg-gray-800 text-gray-600'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                    >
                        Confirm Booking
                    </button>
                </div>
            </div>

            {/* -------------------------- SUCCESS MODAL ------------------------- */}

            {done && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                    <div className="mx-4 w-full max-w-sm rounded-lg border border-green-500 bg-red-600 p-8">
                        <div className="text-center">
                            <CheckCircle
                                size={48}
                                className="mx-auto mb-4 text-green-500"
                            />

                            <h2 className="mb-2 text-lg font-bold">
                               আপাতত কাজ চলছে
                            </h2>

                            <p className="text-sm text-gray-400">
                                Your slot has been booked.
                                Waiting for admin approval.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}