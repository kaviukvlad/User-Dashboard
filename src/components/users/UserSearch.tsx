import { Search } from 'lucide-react'
import { memo } from 'react'

interface UserSearchProps {
	value: string
	onChange: (value: string) => void
}

// Огортаємо в memo щоб не було ререндеру
export const UserSearch = memo(function UserSearch({
	value,
	onChange
}: UserSearchProps) {
	return (
		<div className="relative flex-1">
			<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
			<input
				type="text"
				placeholder="Пошук за іменем..."
				value={value}
				onChange={e => onChange(e.target.value)}
				className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
			/>
		</div>
	)
})
