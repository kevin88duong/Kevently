import * as z from "zod"

 export const eventFormSchema = z.object({
    title: z.string().min(3,"Must be at least 3 characters"),
    description: z.string().min(3,"Must be at least 3 characters").max(400,"Word limit reached(400)"),
    location: z.string().min(3,"Must be at least 3 characters").max(400,"Word limit reached(400)"),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()

  })