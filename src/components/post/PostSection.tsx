import PostCard from "@/components/post/PostCard";
import {Post} from "@/components/service/posts";

type Props = {
    title: string
    wrapperClass: string
    posts: Post[]
}

const PostSection = ({wrapperClass = '', title, posts}: Props) => {
    return <section className={wrapperClass}>
        <h2 className={'font-bold border-y-2 py-2'}>{title}</h2>
        <div className={'mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'}>
            {posts.map(post => <PostCard key={post.title} {...post} />)}
        </div>
    </section>
}

export default PostSection