import Image from "next/image";
import Link from "next/link";
import {Nanum_Gothic} from "next/font/google";

const gothic = Nanum_Gothic({
    subsets: ['latin'],
    weight: '800'
})


const Profile = () => {
    return <article className={'flex flex-col items-center gap-1'}>
        <Image className={'rounded-full'} src="/images/profile.png" alt="프로필 이미지" width={200} height={200}/>
        <h2 className={`text-lg font-bold text-center`}>Hi, I'm Taehun</h2>
        <p className={'text-sm'}>프론트엔드 개발자</p>
        <Link className={'rounded-lg p-1 font-medium text-white text-sm transition bg-blue-500 hover:bg-blue-400'} href={'/contact'}>Contact Me</Link>
    </article>
}

export default Profile