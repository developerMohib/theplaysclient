'use client'

import { useState } from 'react'
import {
    ChevronLeft,
    ChevronRight,
    CheckCircle,
} from 'lucide-react'

type Package = {
    id: number
    name: string
    duration: number
    price: number
    features: string[]
}
type TimeSlot = {
    id: number
    time: string
    label: string
    bookedStations: number
    totalStations: number
    bookedNames: string[]
}

const AdvancedBookingSection = () => {
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
    const [selectedPackage, setSelectedPackage] = useState<number>(1)

    const [paymentMethod, setPaymentMethod] = useState<'online' | 'cash'>('online')

    const [showConfirmation, setShowConfirmation] =
        useState<boolean>(false)


    const packages: Package[] = [
        {
            id: 1,
            name: 'Starter Ride',
            duration: 1,
            price: 50,
            features: ['1 Hour', 'Basic Wheel', 'Single Station'],
        },
        {
            id: 2,
            name: 'Street Racer',
            duration: 2,
            price: 90,
            features: ['2 Hours', 'Premium Wheel', 'Priority'],
        },
        {
            id: 3,
            name: 'Pro Driver',
            duration: 3,
            price: 120,
            features: ['3 Hours', 'Pro Setup', 'VIP Station'],
        },
    ]

    const timeSlots: TimeSlot[] = [
        {
            id: 1,
            time: '09:00',
            label: '9:00 AM',
            bookedStations: 2,
            totalStations: 4,
            bookedNames: ['Ahmed', 'Fatima'],
        },
        {
            id: 2,
            time: '10:00',
            label: '10:00 AM',
            bookedStations: 1,
            totalStations: 4,
            bookedNames: ['Hassan'],
        },
        {
            id: 3,
            time: '11:00',
            label: '11:00 AM',
            bookedStations: 0,
            totalStations: 4,
            bookedNames: [],
        },
    ]

    const getDaysInMonth = (date: Date): number => {
        return new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate()
    }

    const getFirstDayOfMonth = (date: Date): number => {
        return new Date(
            date.getFullYear(),
            date.getMonth(),
            1
        ).getDay()
    }

    const isDateInPast = (date: Date): boolean => {
        const today = new Date()

        today.setHours(0, 0, 0, 0)

        return date < today
    }

    const formatDate = (date: Date): string => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

    const generateCalendarDays = (): (Date | null)[] => {
        const daysInMonth = getDaysInMonth(currentMonth)

        const firstDay = getFirstDayOfMonth(currentMonth)

        const days: (Date | null)[] = []

        for (let i = 0; i < firstDay; i++) {
            days.push(null)
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth(),
                day
            )

            days.push(date)
        }

        return days
    }

    const isSlotAvailable = (slot: TimeSlot): boolean => {
        return slot.bookedStations < slot.totalStations
    }

    const isTimeInPast = (
        date: Date | null,
        timeSlot: TimeSlot
    ): boolean => {
        if (!date) return false
        const now = new Date()

        const [hours, minutes] = timeSlot.time.split(':')

        const slotDateTime = new Date(
            date?.getFullYear() || 0,
            date?.getMonth() || 0,
            date?.getDate() || 0,
            Number(hours),
            Number(minutes)
        )

        return slotDateTime < now
    }

    const previousMonth = () => {
        setCurrentMonth(
            new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() - 1
            )
        )
    }

    const nextMonth = () => {
        setCurrentMonth(
            new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() + 1
            )
        )
    }

    const handleDateSelect = (date: Date) => {
        if (!isDateInPast(date)) {
            setSelectedDate(date)
            setSelectedSlot(null)
        }
    }

    const handleConfirmBooking = () => {
        if (!selectedDate || !selectedSlot) return

        console.log({
            date: formatDate(selectedDate),
            time: selectedSlot.label,
            package: packages.find(
                (pkg) => pkg.id === selectedPackage
            ),
            paymentMethod,
        })

        setShowConfirmation(true)

        setTimeout(() => {
            setShowConfirmation(false)
            setSelectedDate(null)
            setSelectedSlot(null)
        }, 3000)
    }

    const calendarDays = generateCalendarDays()

    const monthYear = currentMonth.toLocaleDateString(
        'en-US',
        {
            month: 'long',
            year: 'numeric',
        }
    )

    return (
        <div className="bg-black py-12 px-4">
            <div className="mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-5xl font-bold text-white">
                        Book Your Gaming Session
                    </h1>

                    <p className="text-lg text-gray-400">
                        Select your date, time, and package
                    </p>
                </div>

                {/* CALENDAR */}

                <div className="p-1">
                    <div className="mb-8 flex items-center justify-between">
                        <button
                            onClick={previousMonth}
                            className="rounded-lg p-1 transition hover:bg-blue-600/20"
                        >
                            <ChevronLeft
                                size={24}
                                className="text-blue-400"
                            />
                        </button>

                        <h2 className="text-2xl font-bold text-blue-300">
                            {monthYear}
                        </h2>

                        <button
                            onClick={nextMonth}
                            className="rounded-lg p-2 transition hover:bg-blue-600/20"
                        >
                            <ChevronRight
                                size={24}
                                className="text-blue-400"
                            />
                        </button>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='grid-cols-1'>
                            <div className="mb-4 grid grid-cols-7 gap-2">
                                {[
                                    'Sun',
                                    'Mon',
                                    'Tue',
                                    'Wed',
                                    'Thu',
                                    'Fri',
                                    'Sat',
                                ].map((day) => (
                                    <div
                                        key={day}
                                        className="py-2 text-center text-sm font-bold text-gray-400"
                                    >
                                        {day}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-7 gap-2">
                                {calendarDays.map((date, index) => {
                                    if (!date) {
                                        return (
                                            <div
                                                key={index}
                                                className=""
                                            />
                                        )
                                    }

                                    const isPast =
                                        isDateInPast(date)

                                    const isSelected =
                                        selectedDate &&
                                        date.toDateString() ===
                                        selectedDate.toDateString()

                                    return (
                                        <button
                                            key={date.toDateString()}
                                            onClick={() =>
                                                handleDateSelect(date)
                                            }
                                            disabled={isPast}
                                            className={` rounded-lg font-bold transition py-2 ${isSelected
                                                ? 'border-2 border-cyan-400 bg-linear-to-br from-blue-600 to-cyan-600 text-white'
                                                : isPast
                                                    ? 'cursor-not-allowed bg-gray-800 text-gray-600 opacity-50'
                                                    : 'border border-blue-500/30 bg-gray-800/50 text-gray-300 hover:bg-blue-600/20'
                                                }`}
                                        >
                                            {date.getDate()}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='grid-cols-1'>
                            <div className="mt-8 rounded-xl border border-blue-500/30 bg-linear-to-br from-blue-900/40 to-cyan-900/20 p-8">
                                <h2 className="mb-6 text-2xl font-bold text-blue-300">
                                    Available Time Slots
                                </h2>

                                <div className="space-y-3">
                                    {timeSlots.map((slot) => {
                                        const available =
                                            isSlotAvailable(slot)

                                        const isPast =
                                            isTimeInPast(
                                                selectedDate,
                                                slot
                                            )

                                        const isSelected =
                                            selectedSlot?.id ===
                                            slot.id

                                        return (
                                            <button
                                                key={slot.id}
                                                disabled={
                                                    isPast ||
                                                    !available
                                                }
                                                onClick={() =>
                                                    setSelectedSlot(
                                                        slot
                                                    )
                                                }
                                                className={`w-full rounded-lg border-2 p-4 text-left transition ${isSelected
                                                    ? 'border-cyan-400 bg-linear-to-br from-blue-600/60 to-cyan-600/60'
                                                    : 'border-gray-700/50 bg-gray-800/50'
                                                    }`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-bold text-blue-300">
                                                            {
                                                                slot.label
                                                            }
                                                        </p>

                                                        <p className="mt-1 text-sm text-gray-400">
                                                            {
                                                                slot.totalStations -
                                                                slot.bookedStations
                                                            }{' '}
                                                            seats available
                                                        </p>
                                                    </div>

                                                    <div className="flex gap-1">
                                                        {[
                                                            ...Array(
                                                                slot.totalStations
                                                            ),
                                                        ].map(
                                                            (_, i) => (
                                                                <div
                                                                    key={
                                                                        i
                                                                    }
                                                                    className={`h-3 w-3 rounded-full ${i <
                                                                        slot.bookedStations
                                                                        ? 'bg-red-500'
                                                                        : 'bg-green-500'
                                                                        }`}
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* CONFIRMATION */}

                {showConfirmation && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
                        <div className="w-full max-w-md rounded-xl border-2 border-green-500/50 bg-linear-to-br from-green-900/40 to-cyan-900/20 p-8">
                            <div className="mb-4 flex justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                                    <CheckCircle
                                        size={40}
                                        className="text-green-400"
                                    />
                                </div>
                            </div>

                            <h2 className="mb-4 text-center text-2xl font-bold text-green-300">
                                Booking Confirmed!
                            </h2>

                            <button
                                onClick={() =>
                                    setShowConfirmation(
                                        false
                                    )
                                }
                                className="mt-4 w-full rounded-lg bg-linear-to-r from-green-600 to-cyan-600 px-6 py-3 font-bold text-white"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                )}

                {/* BUTTON */}

                <button
                    onClick={handleConfirmBooking}
                    disabled={
                        !selectedDate || !selectedSlot
                    }
                    className={`mt-8 w-full rounded-lg px-6 py-4 text-lg font-bold transition ${selectedDate && selectedSlot
                        ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white'
                        : 'cursor-not-allowed bg-gray-700 text-gray-400'
                        }`}
                >
                    Confirm Booking
                </button>
            </div>
        </div>
    )
}

export default AdvancedBookingSection