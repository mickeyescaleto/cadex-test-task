import * as z from 'zod';

export const schema = z.object({
  name: z.string().trim().min(1),
  email: z.string().email().trim().min(1),
  message: z.string().trim().min(1).max(256),
});
