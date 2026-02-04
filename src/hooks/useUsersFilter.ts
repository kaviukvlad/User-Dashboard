import { User } from '@/types'
import { UserEditFormValues } from '@/types/schemas'
import { useMemo, useState } from 'react'

export function useUsersFilter(initialUsers: User[]) {
	// --- STATE ---
	const [users, setUsers] = useState<User[]>(initialUsers)
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedCity, setSelectedCity] = useState('')

	// --- DERIVED STATE (MEMO) ---

	// Унікальні міста
	const cities = useMemo(() => {
		const allCities = users.map(u => u.address.city)
		return Array.from(new Set(allCities)).sort()
	}, [users])

	// Відфільтровані користувачі
	const filteredUsers = useMemo(() => {
		return users.filter(user => {
			const matchesSearch = user.name
				.toLowerCase()
				.includes(searchTerm.toLowerCase())

			const matchesCity = selectedCity
				? user.address.city === selectedCity
				: true

			return matchesSearch && matchesCity
		})
	}, [users, searchTerm, selectedCity])

	// --- ACTIONS ---

	// Логіка оновлення конкретного користувача
	const updateUser = (id: number, data: UserEditFormValues) => {
		setUsers(prev =>
			prev.map(u =>
				u.id === id
					? {
							...u,
							name: data.name,
							email: data.email,
							address: { ...u.address, city: data.city }
						}
					: u
			)
		)
	}

	return {
		// Data
		users,
		filteredUsers,
		cities,

		// Filters State
		searchTerm,
		setSearchTerm,
		selectedCity,
		setSelectedCity,

		// Actions
		updateUser
	}
}
