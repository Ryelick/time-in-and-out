import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TimeStampEntriesList from '../TimeStampEntriesList/TimeStampEntriesList';

export default function TimeStamp({setActive, setHours, setMinutes, setSeconds, hours, minutes, seconds, setCounter, active}) {
    const timeIn = useRef('')
    const timeOut = useRef('')
    const [timeStampEntry, setTimeStampEntry] = useState([])

    function timeInHandler(e){
        timeIn.current = Date()
        setActive(true)
    }

    function timeOutHandler(e){
        timeOut.current = Date()
        setTimeStampEntry([ 
            ...timeStampEntry, 
            {
                entryTimeIn:timeIn.current, 
                entryTimeOut: timeOut.current,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                id: uuidv4()
            } 
        ])
        console.log(timeStampEntry)
        setActive(false)
        setSeconds(0)
        setMinutes(0)
        setHours(0)
        setCounter(0)
    }

    return (
        <div>
            <button disabled={active} onClick={timeInHandler}>Time In</button>
            <button disabled={!active} onClick={timeOutHandler}>Time Out</button>
            <TimeStampEntriesList
                timeStampEntry={timeStampEntry}
            />
        </div>
    )
}
