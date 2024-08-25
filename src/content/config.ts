import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        tags: z.array(z.string()),
        date: z.string().or(z.number()),
        links: z.array(
            z.object({
                label: z.string(),
                url: z.string(),
            })
        ),
        images: z.array(image())
    })
})

export const collections = {
    'projects': projectCollection,
};