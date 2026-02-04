// Функція для отримання користувачів.

import { User } from '@/types'

// Використовуватиметься в Server Component.
export async function getUsers(): Promise<User[]> {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/users', {
			// Next.js: кешуємо дані за замовчуванням, але можна налаштувати revalidate
			next: { revalidate: 3600 }
		})

		if (!res.ok) {
			throw new Error('Failed to fetch users')
		}

		return res.json()
	} catch (error) {
		console.error('API Error:', error)
		// Повертаємо пустий масив або обробляємо помилку на рівні UI
		return []
	}
}
