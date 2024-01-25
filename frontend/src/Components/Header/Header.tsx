import s from './Header.module.scss'

type Props = {}

export default function Header({ }: Props) {
  return (
    <div className={s.container}>
      <div>
        <p>Projects</p>
        <p>count: {28}</p>
        <p>main language: {'JavaScript'}</p>
      </div>
      <div className={s.tools_list}>

      </div>
    </div>
  )
}