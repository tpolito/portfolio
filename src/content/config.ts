import { z, defineCollection } from 'astro:content'; // run 'npx astro sync' if ts complains about this

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		draft: z.boolean().default(false),
		createdAt: z.date().transform((str) => new Date(str)),
		updatedAt: z.date().transform((str) => new Date(str)),
		title: z.string(),
		category: z.enum(['personal', 'tech', 'climbing', 'media']),
		tags: z.array(z.string()).optional()
	})
});

export const collections = {
	blog: blogCollection
};
