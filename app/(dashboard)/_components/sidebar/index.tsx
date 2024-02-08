import React from 'react'
import NewButton from './new-button'
import { List } from './list'

const Sidebar = () => {
  return (
    <div className='fixed z-[1] left-0 h-full bg-blue-950 text-white flex w-[60px] p-3 flex-col gap-y-4'>
        <List/>
        <NewButton/>
    </div>
  )
}

export default Sidebar