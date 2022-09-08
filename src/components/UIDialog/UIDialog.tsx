import { XMarkIcon } from '@heroicons/react/24/solid/index.js'

interface UIDialogProps {
    onClose: () => void
}

const UIDialog = ({ onClose }: UIDialogProps) => {
    return (
        <>
            <div
                className="fixed inset-0 bg-neutral-very-dark-black-blue opacity-95 z-10"
                onClick={onClose}
            />

            <div className="fixed  bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg w-[calc(100%-4rem)] z-10">
                <button
                    className="w-8 fixed top-4 right-4  z-10"
                    onClick={onClose}
                >
                    <XMarkIcon className="text-primary-very-dark-blue" />
                </button>
                <div className="flex flex-col text-primary-very-dark-blue text-center font-semibold gap-4">
                    <a href="#">Product</a>
                    <a href="#">Company</a>
                    <a href="#">About</a>
                    <a href="#">Team</a>
                    <a href="#">Gallery</a>
                    <a href="#">Connect</a>
                </div>
            </div>
        </>
    )
}

export default UIDialog
