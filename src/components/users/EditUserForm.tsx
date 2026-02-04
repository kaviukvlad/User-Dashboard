'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { User } from '@/types'
import { UserEditFormValues, userEditSchema } from '@/types/schemas'
import clsx from 'clsx'

interface EditUserFormProps {
	user: User
	onSubmit: (data: UserEditFormValues) => void
	onCancel: () => void
}

export function EditUserForm({ user, onSubmit, onCancel }: EditUserFormProps) {
	// Ініціалізація форми з дефолтними значеннями поточного юзера
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<UserEditFormValues>({
		resolver: zodResolver(userEditSchema),
		defaultValues: {
			name: user.name,
			email: user.email,
			city: user.address.city
		}
	})

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="space-y-4"
		>
			{/* Name Input */}
			<div>
				<label className="block text-sm font-medium text-gray-700">Ім`я</label>
				<input
					{...register('name')}
					className={clsx(
						'mt-1 block w-full rounded-md border p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500',
						errors.name ? 'border-red-500' : 'border-gray-300'
					)}
				/>
				{errors.name && (
					<p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
				)}
			</div>

			{/* Email Input */}
			<div>
				<label className="block text-sm font-medium text-gray-700">Email</label>
				<input
					{...register('email')}
					className={clsx(
						'mt-1 block w-full rounded-md border p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500',
						errors.email ? 'border-red-500' : 'border-gray-300'
					)}
				/>
				{errors.email && (
					<p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
				)}
			</div>

			{/* City Input */}
			<div>
				<label className="block text-sm font-medium text-gray-700">Місто</label>
				<input
					{...register('city')}
					className={clsx(
						'mt-1 block w-full rounded-md border p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500',
						errors.city ? 'border-red-500' : 'border-gray-300'
					)}
				/>
				{errors.city && (
					<p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
				)}
			</div>

			{/* Actions */}
			<div className="flex justify-end space-x-3 pt-4">
				<button
					type="button"
					onClick={onCancel}
					className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
				>
					Скасувати
				</button>
				<button
					type="submit"
					disabled={isSubmitting}
					className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
				>
					Зберегти
				</button>
			</div>
		</form>
	)
}
