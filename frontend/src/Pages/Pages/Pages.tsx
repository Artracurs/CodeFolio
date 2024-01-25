import MainPage from '../MainPage/MainPage'
import ProjectsList from '../ProjectsPage/ProjectsList'
import s from './Pages.module.scss'

type Props = {}

export default function Pages({ }: Props) {

    const footerText = ['https://github.com/lanneq-dev', 'https://gitlab.com/0xdf00ff', 'https://github.com/artracurs']

    return (
        <>
        <div className={s.container}>
            <MainPage footerText={footerText}/>
        </div>
        <div className={s.container}>
            <ProjectsList />
        </div>
        </>
    )
}