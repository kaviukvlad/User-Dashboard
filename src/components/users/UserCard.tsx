import { User } from '@/types'
import { MapPin, Pencil } from 'lucide-react'

interface UserCardProps {
	user: User
	onEdit: (user: User) => void
}

export function UserCard({ user, onEdit }: UserCardProps) {
	return (
		<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col justify-between">
			<div>
				<div className="flex justify-between items-start mb-2">
					<h3 className="font-semibold text-lg text-gray-900">{user.name}</h3>
					<span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
						ID: {user.id}
					</span>
				</div>
				<p className="text-sm text-gray-500 mb-1">{user.email}</p>
				<div className="flex items-center text-sm text-gray-500 mt-2">
					<MapPin className="w-4 h-4 mr-1" />
					{user.address.city}
				</div>
			</div>

			<button
				onClick={() => onEdit(user)}
				className="mt-4 flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
			>
				<Pencil className="w-4 h-4 mr-2" />
				Редагувати
			</button>
		</div>
	)
}
