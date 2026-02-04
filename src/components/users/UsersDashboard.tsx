'use client'

import { Modal } from '@/components/ui/Modal'
import { useUsersFilter } from '@/hooks/useUsersFilter'
import { User } from '@/types'
import { UserEditFormValues } from '@/types/schemas'
import { useState } from 'react'

import { CityFilter } from './CityFilter'
import { EditUserForm } from './EditUserForm'
import { UserGrid } from './UserGrid'
import { UserSearch } from './UserSearch'

interface UsersDashboardProps {
	initialUsers: User[]
}

export function UsersDashboard({ initialUsers }: UsersDashboardProps) {
	// 1. Logic Layer (Custom Hook)
	const {
		filteredUsers,
		cities,
		searchTerm,
		setSearchTerm,
		selectedCity,
		setSelectedCity,
		updateUser
	} = useUsersFilter(initialUsers)

	// 2. UI State Layer
	const [editingUser, setEditingUser] = useState<User | null>(null)

	// 3. Handlers
	const handleFormSubmit = (data: UserEditFormValues) => {
		if (editingUser) {
			updateUser(editingUser.id, data)
			setEditingUser(null)
		}
	}

	return (
		<div className="space-y-6">
			{/* Controls Section */}
			<div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg shadow-sm border border-gray-200">
				<UserSearch
					value={searchTerm}
					onChange={setSearchTerm}
				/>

				<CityFilter
					cities={cities}
					selectedCity={selectedCity}
					onCityChange={setSelectedCity}
				/>
			</div>

			{/* Grid Section */}
			<UserGrid
				users={filteredUsers}
				onEditUser={setEditingUser}
			/>

			{/* Modal Section */}
			<Modal
				isOpen={!!editingUser}
				onClose={() => setEditingUser(null)}
				title="Редагувати користувача"
			>
				{editingUser && (
					<EditUserForm
						user={editingUser}
						onSubmit={handleFormSubmit}
						onCancel={() => setEditingUser(null)}
					/>
				)}
			</Modal>
		</div>
	)
}
