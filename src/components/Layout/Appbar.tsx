import { Bars3Icon } from '@heroicons/react/24/solid/index.js'
import { useState } from 'react'
import UIDialog from '../UIDialog/UIDialog'

const Appbar = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    return (
        <>
            {isDialogOpen && (
                <UIDialog onClose={() => setIsDialogOpen(false)} />
            )}
            <header className="absolute flex justify-between mt-8 px-4 w-full">
                <h1 className="text-white font-bold text-3xl">Blogr</h1>
                <button onClick={() => setIsDialogOpen(true)}>
                    <Bars3Icon className="w-8 text-white" />
                </button>
            </header>
        </>
    )
}

export default Appbar
