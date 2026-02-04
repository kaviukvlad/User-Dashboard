import { z } from 'zod'

// Схема валідації для форми редагування
// Використовуємо zod для перевірки email та обов'язкових полів
export const userEditSchema = z.object({
	name: z.string().min(2, "Ім'я має містити мінімум 2 символи"),
	email: z.string().email('Введіть коректну email адресу'),
	city: z.string().min(2, 'Назва міста має бути довшою')
})

// Тип, який виводиться автоматично зі схеми
export type UserEditFormValues = z.infer<typeof userEditSchema>
