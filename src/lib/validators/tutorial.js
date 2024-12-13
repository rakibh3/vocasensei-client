import * as z from 'zod';

export const tutoriaCreatelSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  videoUrl: z.string().url('Must be a valid YouTube URL'),
});

export const tutoriaUpdatelSchema = tutoriaCreatelSchema.partial();
