import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import { Page } from "@/types/Page";

export async function getProjects(): Promise<Project[]> {
    return createClient(config).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {
    return createClient(config).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        { slug }
    )
}

export async function getPages(): Promise<Page[]> {
    return createClient(config).fetch(
        groq`*[_type == "page"]{
            _id,
            title,
            _createdAt,
            "slug": slug.current,
            "image": image.asset->url,
        }`
    )
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(config).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            content
        }`,
        { slug }
    )
}