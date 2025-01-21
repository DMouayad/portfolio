import type { CollectionEntry } from "astro:content";

export function sortItemsByDateDesc(itemA: CollectionEntry<'project'>, itemB: CollectionEntry<'project'>) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}