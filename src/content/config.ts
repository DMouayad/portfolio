import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const ProjectZod = z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.string().or(z.number()),
    links: z.array(
        z.object({
            label: z.string(),
            url: z.string(),
            icon: z.string()
        })
    ),
    shortDesc: z.string(),
    images: z.array(z.object({
        src: z.string(),
        width: z.number(),
        height: z.number(),
        format: z.string()
    }))
})
const ExperienceZod = z.object({
    title: z.string(),
    upperTitle: z.string(),
    cssClasses: z.string(),
    link: z.object({
        url: z.string(),
        text: z.string(),
        ariaLabel: z.string(),
        css: z.string().optional()
    }).optional()
})
const project = defineCollection({
    schema: ({ image }) => ProjectZod.merge(z.object({ images: z.array(image()) })),
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
})
const experience = defineCollection({
    schema: ExperienceZod,
    loader: glob({ pattern: "**/*.md", base: "./src/content/experiences" }),
})

export const collections = { project, experience };