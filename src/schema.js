import { object, string, number, date, InferType } from 'yup';

let loginSchema = object({
  email: string().email(),
  password: string().min(8),
});

// parse and assert validity
const user = await loginSchema.validate(await fetchUser());

type User = InferType<typeof loginSchema>;