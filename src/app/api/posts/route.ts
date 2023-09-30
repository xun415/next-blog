import {Request} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import {NextResponse} from "next/server";
import {getPosts} from "@/components/service/posts";

export type Params = {
    isFeatured: boolean
}

export async function GET(request: Request) {
    const posts = await getPosts()

    return NextResponse.json(posts.filter(post => post.featured))
}