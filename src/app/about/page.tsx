import Profile from "@/components/Profile";

type Info = {
    title: string
    contents: string | string[]
}
const AboutPage = () => {
    const infoList: Info[] = [
        {
            title: 'Who am I?',
            contents: ['3년차 프론트엔드 개발자', '읽기 쉽고, 철학이 담긴 프로그램을 만들고 있음']
        },
        {
            title: 'Career',
            contents: ['엠포스(22.03 ~ 23.09)', '어솔루션(21.07 ~ 22.02)']
        },
        {
            title: 'Skills',
            contents: ['React, Next.js (v12, v13), Vue 2', 'SCSS, Bootstrap, Charkra-UI', 'React-query, Zustand, React-testing-library, Vitest, React-hook-form']
        }
    ]
    return <div className={'flex flex-col'}>
        <Profile />
        <section className={'mt-8 bg-gray-100 w-full text-center p-8 rounded-lg'}>
            <dl>
                {
                    infoList.map(info => <>
                        <dt className={'text-xl font-semibold my-2'}>{info.title}</dt>
                        <dd className={'text-sm'}>
                            {
                                Array.isArray(info.contents)?
                                    <ul>
                                        {
                                            info.contents.map(content =>
                                                <li key={content}>
                                                    {content}
                                                </li>
                                            )
                                        }
                                    </ul>
                                    :
                                info.contents
                            }
                        </dd>
                    </>)
                }
            </dl>
        </section>
    </div>
}

export default AboutPage