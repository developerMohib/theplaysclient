'use client'

import { useState } from 'react'
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMe } from '@/src/hooks/useMe';
import { useOneGame } from '@/src/hooks/useGames';

type Game = { id: string; name: string }
type TimeSlot = { id: number; label: string; hour: number }

const GAMES: Game[] = [
    { id: 'fc', name: 'FC 26' },
    { id: 'gta', name: 'GTA V' },
    { id: 'forza', name: 'Forza' },
]

const generateSlots = (): TimeSlot[] =>
    Array.from({ length: 13 }, (_, i) => {
        const hour = i + 10
        return {
            id: hour,
            hour,
            label: `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`,
        }
    })
const getToday = () => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return today
}

export default function BookingSlot() {
    const { data ,isLoading} = useMe();
    const [game, setGame] = useState<Game | null>(null)
    const [slot, setSlot] = useState<TimeSlot | null>(null)
    const [month, setMonth] = useState(new Date())
    const [paymentMethod, setPaymentMethod] = useState<'online' | 'cash'>('online')
    const [done, setDone] = useState(false)
    const [date, setDate] = useState<Date | null>(getToday())

    const slots = generateSlots()
    const today = new Date()
    today.setHours(0, 0, 0, 0)

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

    const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()


    const handlePreviousMonth = () => {
        setMonth(
            new Date(month.getFullYear(), month.getMonth() - 1)
        )
    }

    const handleNextMonth = () => {
        setMonth(
            new Date(month.getFullYear(), month.getMonth() + 1)
        )
    }
    const router = useRouter()
    const pathname = usePathname()
    if (isLoading) {
        return (
            <p>user searching....</p>
        )
    }
    const handleConfirm = () => {
        if (!data) {
            router.push(`/signin?redirect=${pathname}`)
            return
        }
        if (!date || !game || !slot) return
        console.log({
            date,
            game,
            slot,
            paymentMethod,
        })

        setDone(true)

        setTimeout(() => {
            setDone(false)
            setDate(null)
            setGame(null)
            setSlot(null)
        }, 2000)
    }

    return (
        <div className="min-h-screen px-4 py-10">

            {/* TITLE */}
            <h1 className="text-center text-4xl font-bold mb-8">
                Book Gaming Slot
            </h1>

            <div className="grid lg:grid-cols-4 gap-6">

                {/* DATE */}
                <div className="border border-gray-800 p-2 rounded">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <button
                            onClick={handlePreviousMonth}
                            className="py-1 px-3 bg-gray-800 hover:bg-gray-700 rounded"
                        >
                            <ChevronLeft />
                        </button>

                        <h2 className="font-semibold">
                            {month.toLocaleString("default", {
                                month: "long",
                                year: "numeric",
                            })}
                        </h2>

                        <button
                            onClick={handleNextMonth}
                            className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded"
                        >
                            <ChevronRight />
                        </button>
                    </div>

                    {/* Calendar */}
                    <div className="grid grid-cols-7 text-xs gap-1">
                        {Array.from({ length: days }).map((_, i) => {
                            const d = new Date(
                                month.getFullYear(),
                                month.getMonth(),
                                i + 1
                            );

                            const disabled = isPastDate(d);

                            return (
                                <button
                                    key={i}
                                    disabled={disabled}
                                    onClick={() => {
                                        setDate(d)
                                        setSlot(null)
                                    }}
                                    className={`p-2 rounded transition ${disabled
                                        ? "bg-gray-900 text-gray-600 cursor-not-allowed"
                                        : date?.toDateString() ===
                                            d.toDateString()
                                            ? "bg-blue-600 text-white"
                                            : "hover:bg-gray-800"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* GAME */}
                <div className="border border-gray-800 p-4 rounded">
                    <p className="mb-3 font-semibold">Game</p>

                    {GAMES.map(g => (
                        <button
                            key={g.id}
                            onClick={() => setGame(g)}
                            className={`block w-full text-left p-2 mb-2 rounded ${game?.id === g.id ? 'bg-blue-600' : 'hover:bg-gray-800'
                                }`}
                        >
                            {g.name}
                        </button>
                    ))}
                </div>

                {/* TIME (SCROLL BAR FIX) */}
                <div className="border border-gray-800 p-4 rounded">
                    <p className="mb-3 font-semibold">Time Slots</p>

                    <div className="h-64 overflow-y-auto space-y-2 pr-2">
                        {slots.map(s => {
                            const disabled = !game || isPastTime(s)

                            return (
                                <button
                                    key={s.id}
                                    onClick={() => setSlot(s)}
                                    disabled={disabled}
                                    className={`w-full p-2 rounded text-left ${disabled
                                        ? 'bg-gray-900 text-gray-600 cursor-not-allowed'
                                        : slot?.id === s.id
                                            ? 'bg-blue-600'
                                            : 'hover:bg-gray-800'
                                        }`}
                                >
                                    {s.label}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* SUMMARY */}
                <div className="border border-gray-800 p-4 rounded">
                    <p className="font-semibold mb-3">Summary</p>

                    <p>Date: {date?.toDateString() || '-'}</p>
                    <p>Game: {game?.name || '-'}</p>
                    <p>Time: {slot?.label || '-'}</p>
                    <div className="mt-4 border border-gray-800 p-3 rounded">
                        <p className="mb-2 font-semibold">Payment Method</p>

                        <div className="flex gap-3 text-sm">

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="online"
                                    checked={paymentMethod === 'online'}
                                    onChange={() => setPaymentMethod('online')}
                                />
                                Mobile Payment
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cash"
                                    checked={paymentMethod === 'cash'}
                                    onChange={() => setPaymentMethod('cash')}
                                />
                                Cash
                            </label>

                        </div>
                    </div>
                    <button
                        onClick={handleConfirm}
                        disabled={!date || !game || !slot}
                        className="mt-4 w-full bg-blue-600 py-2 rounded disabled:bg-gray-700"
                    >
                        Confirm
                    </button>
                </div>
            </div>

            {/* MODAL (IMPROVED BUT SIMPLE) */}
            {done && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
                    <div className="bg-gray-900 border border-green-500 p-6 rounded-xl text-center w-80">
                        <CheckCircle className="mx-auto mb-3 text-green-400" size={40} />
                        <h2 className="text-xl font-bold mb-2">Booking Approval</h2>
                        <p className="text-sm text-gray-400">
                            Wait for admin approval
                        </p>
                        <p className="text-sm text-gray-400">
                            Your slot is successfully booked
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}