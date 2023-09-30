import Image from 'next/image'
import Profile from "@/components/Profile";
import {getPosts} from "@/components/service/posts";
import PostSection from "@/components/post/PostSection";

export default async function Home() {
    const posts = await getPosts()
    const featuredPosts = posts.filter(post => post.featured)
    const otherPosts = posts.filter(post => !post.featured)

  return (
    <div>
        <Profile />
        <PostSection title={'Featured'} posts={featuredPosts} wrapperClass={'mt-6'}/>
        <PostSection title={'You may like'} posts={otherPosts} wrapperClass={'mt-6'}/>
    </div>
  )
}
