import React, { useState, useEffect } from 'react'
import TimeStamp from '../TimeStamp/TimeStamp'

export default function Timer() {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [counter, setCounter] = useState(0)
    const [active, setActive] = useState(false)

    useEffect(() => {
        let interval

        if (active) {
            interval = setInterval(() => {
                setSeconds(counter % 60)
                setMinutes(Math.floor(counter / 60))
                setHours(Math.floor(counter / 3600))

                setCounter(counter => counter + 1)
            }, 1000)

            return () => clearInterval(interval);
        }

    }, [active, counter])

    return (
        <div >
            <div>
                Hours:{hours}Minutes:{minutes}Seconds:{seconds}
            </div>
            <TimeStamp
                setActive={setActive}
                setSeconds={setSeconds}
                setMinutes={setMinutes}
                setHours={setHours}
                seconds={seconds}
                minutes={minutes}
                hours={hours}
                setCounter={setCounter}
                active={active}
            />
        </div>
    )
}
