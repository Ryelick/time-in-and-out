import React from 'react'
import TimeStampEntry from '../TimeStampEntry/TimeStampEntry'

export default function TimeStampEntriesList({timeStampEntry}) {
    return (
        <div>
            <ul>
                {timeStampEntry.map((entry) => {
                return (<TimeStampEntry
                    timeIn={entry.entryTimeIn}
                    timeOut={entry.entryTimeOut}
                    hours={entry.hours}
                    minutes={entry.minutes}
                    seconds={entry.seconds}
                />)
                })}
            </ul>
        </div>
    )
}
