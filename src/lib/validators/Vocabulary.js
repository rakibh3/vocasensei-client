import * as z from 'zod';

export const vocabularyCreateFormSchema = z.object({
  word: z
    .string()
    .min(3, 'Word is required and must have at least 1 character')
    .max(100, 'Word must be less than 100 characters'),
  pronunciation: z
    .string()
    .min(1, 'Pronunciation is required and must have at least 1 character')
    .max(100, 'Pronunciation must be less than 100 characters'),
  meaning: z
    .string()
    .min(3, 'Meaning is required and must have at least 3 characters')
    .max(500, 'Meaning must be less than 500 characters'),
  whenToSay: z
    .string()
    .min(10, 'Description of when to say must be at least 10 characters')
    .max(500, 'Description of when to say must be less than 500 characters'),
  lessonNo: z.coerce
    .number()
    .int('Lesson number must be a whole number')
    .positive('Lesson number must be positive')
    .max(1000, 'Lesson number must be less than 1000'),
});

export const vocabularyUpdateFormSchema = vocabularyCreateFormSchema.partial();
