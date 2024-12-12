import * as z from 'zod';

export const lessonCreateFormSchema = z.object({
  lessonName: z
    .string()
    .min(3, 'Lesson name must be at least 3 characters')
    .max(100, 'Lesson name must be less than 100 characters'),
  lessonNumber: z.coerce
    .number()
    .int('Lesson number must be a whole number')
    .positive('Lesson number must be positive')
    .max(1000, 'Lesson number must be less than 1000'),
});
