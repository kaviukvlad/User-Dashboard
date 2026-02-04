import { MapPin } from 'lucide-react'
import { memo } from 'react'

interface CityFilterProps {
	selectedCity: string
	onCityChange: (city: string) => void
	cities: string[]
}

// Огортаємо в memo щоб не було ререндеру
export const CityFilter = memo(function CityFilter({
	selectedCity,
	onCityChange,
	cities
}: CityFilterProps) {
	return (
		<div className="relative w-full md:w-64">
			<MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 " />
			<select
				value={selectedCity}
				onChange={e => onCityChange(e.target.value)}
				className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none "
			>
				<option value="">Всі міста</option>
				{cities.map(city => (
					<option
						key={city}
						value={city}
					>
						{city}
					</option>
				))}
			</select>
		</div>
	)
})
