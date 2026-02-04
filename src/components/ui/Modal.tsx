'use client'

import clsx from 'clsx'
import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	title: string
	children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
	const dialogRef = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		const dialog = dialogRef.current
		if (!dialog) return

		if (isOpen) {
			dialog.showModal()
		} else {
			dialog.close()
		}
	}, [isOpen])

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === dialogRef.current) {
			onClose()
		}
	}

	if (!isOpen) return null

	return (
		<dialog
			ref={dialogRef}
			className={clsx(
				'backdrop:bg-black/50 backdrop:backdrop-blur-sm',
				'm-auto rounded-lg p-6 w-full max-w-md bg-white shadow-xl',
				'animate-in fade-in zoom-in duration-200 open:backdrop:animate-in open:backdrop:fade-in'
			)}
			onClick={handleBackdropClick}
			onCancel={onClose}
		>
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-bold text-gray-900">{title}</h2>
				<button
					onClick={onClose}
					className="p-1 hover:bg-gray-100 rounded-full transition-colors"
				>
					<X className="w-5 h-5 text-gray-500" />
				</button>
			</div>
			<div>{children}</div>
		</dialog>
	)
}
