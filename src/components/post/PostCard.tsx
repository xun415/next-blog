import Image from 'next/image'
type Props = {
    path: string
    title: string
    description: string
    category: string
    date: string
}

const PostCard = ({title, path, description, category, date}: Props) => {
    return <article className={'w-full overflow-hidden flex flex-col border-2 rounded-lg shadow-lg transition-transform hover:translate-y-1'}>
        <Image className={'w-full'} src={`/images/posts/${path}.png`} width={400} height={400} alt={`${title}_이미지`}></Image>
        <div className={'p-2'}>
            <span className={'text-sm opacity-75 uppercase'}>{category}</span>
            <h2 className={'font-bold truncate'}>{title}</h2>
            <p className={'text-sm opacity-50 truncate'}>{description}</p>
            <time dateTime={date} className={'text-xs opacity-50'}>{date}</time>
        </div>
    </article>
}

export default PostCard