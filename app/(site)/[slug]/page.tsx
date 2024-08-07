import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";

type Props = {
    params: {slug: string}
}

export default async function Page({ params }: Props) {
    const page = await getPage(params.slug);
    console.log(page)

    return (
        <div className="max-w-max mx-auto">
            <header className="flex justify-between items-center">
                <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow-md font-extrabold py-3">{page.title}</h1>
            </header>
            <div className="text-lg text-gray-700 mt-10">
                <PortableText value={page.content} />
            </div>
            {page.image && <Image 
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl aspect-square"
            src={page.image}
            alt={page.slug}
            width={600}
            height={600}/>}
        </div>
    )

}