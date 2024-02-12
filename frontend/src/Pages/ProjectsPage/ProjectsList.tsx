import Header from '../../Components/Header/Header'
import s from './ProjectsList.module.scss'

type Props = {}

export default function ProjectsList({}: Props) {
  return (
    <div className={s.container}>
      <Header />
    </div>
  )
}