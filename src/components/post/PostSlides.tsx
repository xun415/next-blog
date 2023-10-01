"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Post} from "@/components/service/posts";
import PostCard from "@/components/post/PostCard";

type Props = {
    title: string
    wrapperClass: string
    posts: Post[]
}

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 767 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 767, min: 640 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    }
};

const PostSlides = ({title, wrapperClass, posts}: Props) => {
    console.log('PostSlides posts: ',posts)
    return (
        <section className={wrapperClass}>
        <h2 className={'font-bold border-y-2 py-2 mb-4'}>{title}</h2>
         <Carousel responsive={responsive} itemClass={'pr-2 py-1'}>
             {
                 posts.map(post => <PostCard key={post.title} {...post}/>)
             }
         </Carousel>
        </section>
    )
}

export default PostSlides

