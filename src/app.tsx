import {MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2 } from 'lucide-react'
import { useState } from 'react'

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen]  = useState(false)

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-row place-items-center gap-1">
            <img src="/logo.svg" alt="plann.er" />
            <h1 className="text-3xl font-bold">trip.us</h1>
          </div>       
          <p className="text-zinc-300 text-lg">a planner for group travels</p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2">
              <MapPin className="size-5 text-zinc-400" />
              <input disabled={isGuestsInputOpen} type="text" placeholder="Where?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input disabled={isGuestsInputOpen} type="text" placeholder="When?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
            </div>

          <div className="w-px h-6 bg-zinc-800" />

          {isGuestsInputOpen ? (
            <button onClick={closeGuestsInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700" >
              Change place/date
              <Settings2 className="size-5" />
            </button>
          ):
          (
            <button onClick={openGuestsInput} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
              Continue
              <ArrowRight className="size-5" />
          </button>
          )}
        </div>

        {isGuestsInputOpen && (
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <UserRoundPlus className="size-5 text-zinc-400" />
              <input type="text" placeholder="With whom?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>
              
            <div className="w-px h-6 bg-zinc-800" />
              <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirm trip
                <ArrowRight className="size-5" />
              </button>
            </div>
        )}
      </div>

      <p className="text-sm text-zinc-500">
        By planning your trip through <em>trip.us</em> you automatically<br />
        agree to your <a className="text-zinc-300 underline" href="#">terms of use</a> and <a className="text-zinc-300 underline" href="#">privacy policies</a>.
      </p>
    </div>
  </div>
  )
}
