import  s from './Footer.module.scss'

type Props = {}

export default function Footer({ }: Props) {
  return (
    <div className={s.container}>
      <span>
        https://github.com/lanneq-dev
      </span>
      <span>
        |
      </span>
      <span>
        https://github.com/artracurs
      </span>
      <span>
        |
      </span>
      <span>
        https://gitlab.com/0xdf00ff
      </span>
    </div>
  )
}