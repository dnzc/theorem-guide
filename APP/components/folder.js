import React, { useState } from 'react'
import { BsCircle, BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function Folder({contents_by_date, contents_by_name}) {

    // sort by: off, ascending, descending
    const [directionState, setDirectionState] = useState('asc')
    const [orderByState, setOrderByState] = useState('name')

    function nameButtonClicked() {
        if(orderByState=='date') {
            setOrderByState('name')
            setDirectionState('asc')
        }
        else {
            setDirectionState(directionState == 'asc' ? 'desc' : 'asc')
        }
    }

    function dateButtonClicked() {
        if(orderByState=='name') {
            setOrderByState('date')
            setDirectionState('desc')
        }
        else {
            setDirectionState(directionState == 'asc' ? 'desc' : 'asc')
        }
    }

    let contents = orderByState == 'name' ? contents_by_name : contents_by_date

    let nameIcon = orderByState == 'name' ? (<BsFillArrowUpCircleFill/>) : (<BsCircle/>)
    let dateIcon = orderByState == 'date' ? (<BsFillArrowUpCircleFill/>) : (<BsCircle/>)

    return (
        <div className='w-full border-border-strong border-x-2 border-t-2 rounded-t-lg'>
            <div className='flex justify-between border-border-strong border-b-2 py-4 px-3'>
                <div className='flex space-x-2 items-center'>
                    <p className='text-lg hidden xs:block'>Name</p>
                    <button onClick={nameButtonClicked} className={directionState=='asc' ? 'rotate-180' : ''}>
                        {nameIcon}
                    </button>
                </div>
                <div className='flex space-x-2 items-center'>
                    <p className='text-lg hidden xs:block'>Updated</p>
                    <button onClick={dateButtonClicked} className={directionState=='desc' ? 'rotate-180' : ''}>
                        {dateIcon}
                    </button>
                </div>
            </div>
            <ul className={`break-all flex ${directionState=='desc' ? 'flex-col-reverse' : 'flex-col' }`}>
                { contents }
            </ul>
        </div>
    )
}