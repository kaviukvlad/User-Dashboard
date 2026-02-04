import { UsersDashboard } from '@/components/users/UsersDashboard'
import { getUsers } from '@/services/api'

// Серверний компонент (за замовчуванням в App Router)
// Тут ми виконуємо запити до бази даних або API.
export default async function Home() {
	// Fetch data on the server
	const users = await getUsers()

	return (
		<main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto space-y-8">
				{/* Header */}
				<div className="text-center md:text-left">
					<h1 className="text-3xl font-bold text-gray-900">Користувачі</h1>
					<p className="mt-2 text-gray-600">
						Керування списком користувачів, фільтрація та редагування.
					</p>
				</div>

				{/* Client Side Dashboard */}
				{/* Ми передаємо початкові дані (hydrating) в клієнтський компонент */}
				<UsersDashboard initialUsers={users} />
			</div>
		</main>
	)
}
