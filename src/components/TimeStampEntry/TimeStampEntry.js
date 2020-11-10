import React from 'react'

export default function TimeStampEntry({ timeIn, timeOut, hours, minutes, seconds }) {
    return (
        <div>
            <div>
                <p>Time In: {timeIn}</p> 
                <p>Time out: {timeOut}</p>
            </div>
            <div>
             Hours: {hours} Minutes: {minutes} Seconds: {seconds}
            </div>
        </div>
    )
}
