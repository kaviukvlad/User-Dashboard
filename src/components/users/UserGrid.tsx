import { User } from '@/types'
import { memo } from 'react'
import { UserCard } from './UserCard'

interface UserGridProps {
	users: User[]
	onEditUser: (user: User) => void
}

// Огортаємо в memo щоб не було ререндеру
export const UserGrid = memo(function UserGrid({
	users,
	onEditUser
}: UserGridProps) {
	if (users.length === 0) {
		return (
			<div className="text-center py-10 text-gray-500  rounded-lg border border-dashed border-gray-300">
				Користувачів не знайдено
			</div>
		)
	}

	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{users.map(user => (
				<UserCard
					key={user.id}
					user={user}
					onEdit={onEditUser}
				/>
			))}
		</div>
	)
})
