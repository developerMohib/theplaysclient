'use client'

import { useState } from 'react'
import {
    ChevronLeft,
    ChevronRight,
    CheckCircle,
    AlertCircle,
} from 'lucide-react'

// ============= TYPES =============
type Game = {
    id: string
    name: string
    image?: string
}

type TimeSlot = {
    id: number
    hour: number
    label: string
}

type BookedSlot = {
    id: string
    gameId: string
    gameName: string
    date: string
    timeSlot: number
    userName: string
    bookedAt: Date
}

// type Booking = {
//     date: Date | null
//     game: Game | null
//     timeSlot: TimeSlot | null
//     paymentMethod: 'online' | 'cash'
// }

// ============= CONSTANTS =============
const GAMES: Game[] = [
    { id: 'fc26', name: 'FC 26' },
    { id: 'forza', name: 'Forza Horizon 5' },
    { id: 'wwe', name: 'WWE 2026' },
    { id: 'gtav', name: 'GTA-V' },
    { id: 'ghost', name: 'Ghost Of Yotei' },
    { id: 'spiderman', name: 'Spiderman 2' },
]

const GAME_SLOTS = 4

const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = []
    for (let hour = 10; hour < 23; hour++) {
        slots.push({
            id: hour,
            hour,
            label: `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`,
        })
    }
    return slots
}

// ============= MOCK DATA =============
// In real app, this would come from API
const MOCK_BOOKED_SLOTS: BookedSlot[] = [
    {
        id: '1',
        gameId: 'spiderman',
        gameName: 'Spiderman 2',
        date: new Date().toISOString().split('T')[0],
        timeSlot: 10,
        userName: 'Ahmed',
        bookedAt: new Date(),
    },
    {
        id: '2',
        gameId: 'spiderman',
        gameName: 'Spiderman 2',
        date: new Date().toISOString().split('T')[0],
        timeSlot: 10,
        userName: 'Fatima',
        bookedAt: new Date(),
    },
    {
        id: '3',
        gameId: 'fc26',
        gameName: 'FC 26',
        date: new Date().toISOString().split('T')[0],
        timeSlot: 11,
        userName: 'Hassan',
        bookedAt: new Date(),
    },
]

// ============= COMPONENT =============
const GameBookingSection = () => {
    // Calendar state
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    // Booking state
    const [selectedGame, setSelectedGame] = useState<Game | null>(null)
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null)
    const [paymentMethod, setPaymentMethod] = useState<'online' | 'cash'>('online')

    // UI state
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false)
    const [bookingError, setBookingError] = useState<string>('')

    const timeSlots = generateTimeSlots()

    // ============= HELPER FUNCTIONS =============
    const getDaysInMonth = (date: Date): number => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    }

    const getFirstDayOfMonth = (date: Date): number => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    }

    const isDateInPast = (date: Date): boolean => {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return date < today
    }

    const formatDate = (date: Date): string => {
        return date.toISOString().split('T')[0]
    }

    const formatDateDisplay = (date: Date): string => {
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

    // Check how many slots are booked for a specific game and time
    const getBookedCount = (date: Date | null, gameId: string, timeSlotId: number): number => {
        if (!date) return 0

        return MOCK_BOOKED_SLOTS.filter(
            (slot) =>
                slot.gameId === gameId &&
                slot.timeSlot === timeSlotId &&
                slot.date === formatDate(date)
        ).length
    }

    // Get names of who booked a slot
    const getBookedNames = (date: Date | null, gameId: string, timeSlotId: number): string[] => {
        if (!date) return []

        return MOCK_BOOKED_SLOTS
            .filter(
                (slot) =>
                    slot.gameId === gameId &&
                    slot.timeSlot === timeSlotId &&
                    slot.date === formatDate(date)
            )
            .map((slot) => slot.userName)
    }

    // Check if a slot is available
    const isSlotAvailable = (date: Date | null, gameId: string, timeSlotId: number): boolean => {
        return getBookedCount(date, gameId, timeSlotId) < GAME_SLOTS
    }

    // Check if time slot is in the past
    const isTimeInPast = (date: Date | null, timeSlot: TimeSlot): boolean => {
        if (!date) return false

        const now = new Date()
        const slotDateTime = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            timeSlot.hour,
            0
        )

        return slotDateTime < now
    }

    // // Check if user is logged in (mock)
    // const isUserLoggedIn = (): boolean => {
    //     // Replace with actual auth check
    //     return typeof window !== 'undefined' && !!localStorage.getItem('user')
    // }

    // ============= EVENT HANDLERS =============
    const handlePreviousMonth = () => {
        setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
        )
    }

    const handleNextMonth = () => {
        setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
        )
    }

    const handleDateSelect = (date: Date) => {
        if (!isDateInPast(date)) {
            setSelectedDate(date)
            setSelectedTimeSlot(null)
            setBookingError('')
        }
    }

    const handleGameSelect = (game: Game) => {
        setSelectedGame(game)
        setSelectedTimeSlot(null)
        setBookingError('')
    }

    const handleTimeSlotSelect = (slot: TimeSlot) => {
        if (!selectedDate || !selectedGame) return

        if (isTimeInPast(selectedDate, slot)) {
            setBookingError('Selected time has passed')
            return
        }

        if (!isSlotAvailable(selectedDate, selectedGame.id, slot.id)) {
            setBookingError('This slot is fully booked for this game')
            return
        }

        setSelectedTimeSlot(slot)
        setBookingError('')
    }

    const handleConfirmBooking = () => {
        if (!selectedDate || !selectedGame || !selectedTimeSlot) {
            setBookingError('Please complete all selections')
            return
        }

        // Check if user is logged in
        // if (!isUserLoggedIn()) {
        //     // Redirect to login page
        //     window.location.href = '/signin'
        //     return
        // }

        // Booking confirmed
        console.log({
            date: formatDateDisplay(selectedDate),
            game: selectedGame.name,
            time: selectedTimeSlot.label,
            paymentMethod,
        })

        setShowConfirmation(true)

        // Reset after 3 seconds
        setTimeout(() => {
            setShowConfirmation(false)
            setSelectedDate(null)
            setSelectedGame(null)
            setSelectedTimeSlot(null)
        }, 3000)
    }

    // ============= RENDER HELPERS =============
    const calendarDays = generateCalendarDays()
    const monthYear = currentMonth.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    })

    const bookedCount = selectedDate && selectedGame
        ? getBookedCount(selectedDate, selectedGame.id, selectedTimeSlot?.id || 0)
        : 0

    const isConfirmDisabled = !selectedDate || !selectedGame || !selectedTimeSlot

    return (
        <div className="min-h-screen bg-black py-12 px-4">
            <div className="mx-auto max-w-7xl">
                {/* HEADER */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-5xl font-bold text-white">
                        Book Your Gaming Session
                    </h1>
                    <p className="text-lg text-gray-400">
                        Select your date, game, time slot, and confirm booking
                    </p>
                </div>

                {/* MAIN BOOKING GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                    {/* STEP 1: DATE SELECTION */}
                    <div className="lg:col-span-1">
                        <CalendarCard
                            currentMonth={currentMonth}
                            monthYear={monthYear}
                            calendarDays={calendarDays}
                            selectedDate={selectedDate}
                            isDateInPast={isDateInPast}
                            onPreviousMonth={handlePreviousMonth}
                            onNextMonth={handleNextMonth}
                            onDateSelect={handleDateSelect}
                        />
                    </div>

                    {/* STEP 2: GAME SELECTION */}
                    <div className="lg:col-span-1">
                        <GameSelectionCard
                            games={GAMES}
                            selectedGame={selectedGame}
                            selectedDate={selectedDate}
                            onGameSelect={handleGameSelect}
                        />
                    </div>

                    {/* STEP 3: TIME SLOT SELECTION */}
                    <div className="lg:col-span-1">
                        <TimeSlotCard
                            timeSlots={timeSlots}
                            selectedDate={selectedDate}
                            selectedGame={selectedGame}
                            selectedTimeSlot={selectedTimeSlot}
                            isSlotAvailable={isSlotAvailable}
                            isTimeInPast={isTimeInPast}
                            getBookedCount={getBookedCount}
                            getBookedNames={getBookedNames}
                            onTimeSlotSelect={handleTimeSlotSelect}
                        />
                    </div>

                    {/* STEP 4: BOOKING SUMMARY */}
                    <div className="lg:col-span-1">
                        <BookingSummaryCard
                            selectedDate={selectedDate}
                            selectedGame={selectedGame}
                            selectedTimeSlot={selectedTimeSlot}
                            formatDateDisplay={formatDateDisplay}
                            bookedCount={bookedCount}
                        />


                        {selectedTimeSlot && (
                            <div className="my-4 rounded-lg border border-blue-500/30 bg-blue-900/20 p-6">
                                <h3 className="mb-4 text-lg font-bold text-blue-300">
                                    Payment Method
                                </h3>
                                <div className="flex gap-4">
                                    {(['online', 'cash'] as const).map((method) => (
                                        <label
                                            key={method}
                                            className="flex cursor-pointer items-center gap-2"
                                        >
                                            <input
                                                type="radio"
                                                name="payment"
                                                value={method}
                                                checked={paymentMethod === method}
                                                onChange={(e) =>
                                                    setPaymentMethod(
                                                        e.target.value as 'online' | 'cash'
                                                    )
                                                }
                                                className="h-4 w-4 cursor-pointer"
                                            />
                                            <span className="text-gray-300 capitalize">
                                                {method}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CONFIRM BUTTON */}
                        <button
                            onClick={handleConfirmBooking}
                            disabled={isConfirmDisabled}
                            className={`w-full rounded-lg px-2 py-3 mt-2 text-lg font-bold transition ${isConfirmDisabled
                                ? 'cursor-not-allowed bg-gray-700 text-gray-400'
                                : 'bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                                }`}
                        >
                            {isConfirmDisabled ? 'Complete All Steps to Confirm' : 'Confirm Booking'}
                        </button>
                    </div>
                </div>

                {/* ERROR MESSAGE */}
                {bookingError && (
                    <div className="mb-6 flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-900/20 p-4">
                        <AlertCircle size={20} className="text-red-400" />
                        <p className="text-red-300">{bookingError}</p>
                    </div>
                )}
            </div>

            {/* CONFIRMATION MODAL */}
            {showConfirmation && <ConfirmationModal />}
        </div>
    )
}

// ============= SUB COMPONENTS =============

interface CalendarCardProps {
    currentMonth: Date
    monthYear: string
    calendarDays: (Date | null)[]
    selectedDate: Date | null
    isDateInPast: (date: Date) => boolean
    onPreviousMonth: () => void
    onNextMonth: () => void
    onDateSelect: (date: Date) => void
}

const CalendarCard = ({
    monthYear,
    calendarDays,
    selectedDate,
    isDateInPast,
    onPreviousMonth,
    onNextMonth,
    onDateSelect,
}: CalendarCardProps) => (
    <div className="rounded-lg border border-blue-500/30 bg-linear-to-br from-blue-900/40 to-cyan-900/20 p-6">
        <div className="mb-4 flex items-center justify-between">
            <button
                onClick={onPreviousMonth}
                className="rounded-lg p-1 transition hover:bg-blue-600/20"
            >
                <ChevronLeft size={24} className="text-blue-400" />
            </button>
            <h2 className="text-xl font-bold text-blue-300">{monthYear}</h2>
            <button
                onClick={onNextMonth}
                className="rounded-lg p-1 transition hover:bg-blue-600/20"
            >
                <ChevronRight size={24} className="text-blue-400" />
            </button>
        </div>

        <div className="mb-3 grid grid-cols-7 gap-1">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div
                    key={day}
                    className="py-2 text-center text-xs font-bold text-gray-400"
                >
                    {day[0]}
                </div>
            ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((date, index) => {
                if (!date) {
                    return <div key={index} />
                }

                const isPast = isDateInPast(date)
                const isSelected = selectedDate?.toDateString() === date.toDateString()

                return (
                    <button
                        key={date.toDateString()}
                        onClick={() => onDateSelect(date)}
                        disabled={isPast}
                        className={`rounded py-1 text-xs font-bold transition ${isSelected
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
)

interface GameSelectionCardProps {
    games: Game[]
    selectedGame: Game | null
    selectedDate: Date | null
    onGameSelect: (game: Game) => void
}

const GameSelectionCard = ({
    games,
    selectedGame,
    selectedDate,
    onGameSelect,
}: GameSelectionCardProps) => (
    <div className="rounded-lg border border-blue-500/30 bg-linear-to-br from-blue-900/40 to-cyan-900/20 p-6">
        <h3 className="mb-4 text-lg font-bold text-blue-300">Select Game</h3>
        {!selectedDate && (
            <p className="mb-4 text-sm text-gray-400">Select a date first</p>
        )}
        <div className="space-y-2">
            {games.map((game) => (
                <button
                    key={game.id}
                    onClick={() => onGameSelect(game)}
                    disabled={!selectedDate}
                    className={`w-full rounded-lg border-2 p-3 text-left transition text-sm ${selectedGame?.id === game.id
                        ? 'border-cyan-400 bg-linear-to-r from-blue-600/60 to-cyan-600/60 text-white'
                        : !selectedDate
                            ? 'cursor-not-allowed border-gray-700/50 bg-gray-800/30 text-gray-500'
                            : 'border-gray-700/50 bg-gray-800/50 text-gray-300 hover:bg-blue-600/20'
                        }`}
                >
                    {game.name}
                </button>
            ))}
        </div>
    </div>
)

interface TimeSlotCardProps {
    timeSlots: TimeSlot[]
    selectedDate: Date | null
    selectedGame: Game | null
    selectedTimeSlot: TimeSlot | null
    isSlotAvailable: (date: Date | null, gameId: string, timeSlotId: number) => boolean
    isTimeInPast: (date: Date | null, slot: TimeSlot) => boolean
    getBookedCount: (date: Date | null, gameId: string, timeSlotId: number) => number
    getBookedNames: (date: Date | null, gameId: string, timeSlotId: number) => string[]
    onTimeSlotSelect: (slot: TimeSlot) => void
}

const TimeSlotCard = ({
    timeSlots,
    selectedDate,
    selectedGame,
    selectedTimeSlot,
    isSlotAvailable,
    isTimeInPast,
    getBookedCount,
    getBookedNames,
    onTimeSlotSelect,
}: TimeSlotCardProps) => (
    <div className="rounded-lg border border-blue-500/30 bg-linear-to-br from-blue-900/40 to-cyan-900/20 p-6">
        <h3 className="mb-4 text-lg font-bold text-blue-300">Select Time</h3>
        {!selectedGame && (
            <p className="mb-4 text-sm text-gray-400">Select a game first</p>
        )}
        <div className="max-h-96 space-y-2 overflow-y-auto">
            {timeSlots.map((slot) => {
                const available = isSlotAvailable(selectedDate, selectedGame?.id || '', slot.id)
                const isPast = isTimeInPast(selectedDate, slot)
                const bookedCount = getBookedCount(selectedDate, selectedGame?.id || '', slot.id)
                const bookedNames = getBookedNames(selectedDate, selectedGame?.id || '', slot.id)
                const isSelected = selectedTimeSlot?.id === slot.id

                return (
                    <button
                        key={slot.id}
                        onClick={() => onTimeSlotSelect(slot)}
                        disabled={!selectedGame || isPast || !available}
                        className={`w-full rounded-lg border-2 p-3 text-left transition text-sm ${isSelected
                            ? 'border-cyan-400 bg-linear-to-r from-blue-600/60 to-cyan-600/60'
                            : !selectedGame || isPast || !available
                                ? 'cursor-not-allowed border-gray-700/50 bg-gray-800/30'
                                : 'border-gray-700/50 bg-gray-800/50 hover:bg-blue-600/20'
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold text-blue-300">{slot.label}</p>
                                {bookedCount > 0 && (
                                    <p className="mt-1 text-xs text-gray-400">
                                        {GAME_SLOTS - bookedCount} slots free • Booked by:{' '}
                                        {bookedNames.join(', ')}
                                    </p>
                                )}
                            </div>
                            <div className="flex gap-1">
                                {Array.from({ length: GAME_SLOTS }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-2 w-2 rounded-full ${i < bookedCount ? 'bg-red-500' : 'bg-green-500'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </button>
                )
            })}
        </div>
    </div>
)

interface BookingSummaryCardProps {
    selectedDate: Date | null
    selectedGame: Game | null
    selectedTimeSlot: TimeSlot | null
    formatDateDisplay: (date: Date) => string
    bookedCount: number
}

const BookingSummaryCard = ({
    selectedDate,
    selectedGame,
    selectedTimeSlot,
    formatDateDisplay,
    bookedCount,
}: BookingSummaryCardProps) => (
    <div className="rounded-lg border border-cyan-500/30 bg-linear-to-br from-cyan-900/40 to-blue-900/20 p-6">
        <h3 className="mb-4 text-lg font-bold text-cyan-300">Booking Summary</h3>
        <div className="space-y-4">
            <div>
                <p className="text-xs text-gray-400">Date</p>
                <p className="font-semibold text-gray-200">
                    {selectedDate ? formatDateDisplay(selectedDate) : '-'}
                </p>
            </div>
            <div>
                <p className="text-xs text-gray-400">Game</p>
                <p className="font-semibold text-gray-200">{selectedGame?.name || '-'}</p>
            </div>
            <div>
                <p className="text-xs text-gray-400">Time</p>
                <p className="font-semibold text-gray-200">{selectedTimeSlot?.label || '-'}</p>
            </div>
            <div className="rounded bg-blue-900/30 p-3">
                <p className="text-xs text-gray-400">Available Slots</p>
                <p className="mt-1 text-2xl font-bold text-cyan-400">
                    {selectedGame && selectedTimeSlot ? GAME_SLOTS - bookedCount : '-'}
                </p>
            </div>
        </div>
    </div>
)

const ConfirmationModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
        <div className="w-full max-w-sm rounded-xl border-2 border-green-500/50 bg-linear-to-br from-green-900/40 to-cyan-900/20 p-8">
            <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                    <CheckCircle size={40} className="text-green-400" />
                </div>
            </div>
            <h2 className="mb-4 text-center text-2xl font-bold text-green-300">
                Booking Confirmed!
            </h2>
            <p className="text-center text-sm text-gray-300">
                Your gaming session has been successfully booked. See you soon!
            </p>
        </div>
    </div>
)

export default GameBookingSection