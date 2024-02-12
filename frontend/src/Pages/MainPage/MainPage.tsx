import AvatarBlock from './AvatarBlock'
import Footer from './Footer'
import LastProjects from './LastProjects'
import s from './MainPage.module.scss'
import Progress from './Progress'
import ToolsBlock from './ToolsBlock'

type Props = {
  footerText: string[]
}

export default function MainPage({ footerText }: Props) {
  const aboutText = `Имею опыт в радиоэлектронике и разработке своих устройств на ARM, AVR; работал графическим дизайнером, могу сделать UI любой сложности; разрабатывал небольшие мобильные и веб приложения. В данный момент  работаю в мебельной компании мастером-технологом, и занимаюсь автоматизацией и оцифровкой бизнеса. 
  Основной стек - React + Node / Python  + PostgreSQL. Очень привлекает промышленный дизайн, но программирование хочу сделать своей основной деятельностью.`

  const education = 'education'

  return (
    <div className={s.container}>
      <div className={s.left}>
        <AvatarBlock />
        <ToolsBlock />
      </div>

      <div className={s.main}>
        <div className={s.header}>
          {/* <div className={s.icon_container}>
            <p className={s.edit_icon}>EDIT</p>
          </div> */}
          <p className={s.name}>{"RUSLAN NURGALEEV"}</p>
          <p className={s.position}>{"FULL STACK ENGINEER"}</p>
          <br />
          <div className={s.telegram}>
            {'Telegram - @lanneq'}
          </div>
        </div>
        <div className={s.info}>
          <div style={{ color: 'white' }}>
            <span>{"+7 702 791 0672"}</span>
            <span>|</span>
            <span>{"lanneq.dev@gmail.com"}</span>
            <span>|</span>
            <span>{"https://lanneq.tech"}</span>
          </div>
        </div>
        <div className={s.about}>
          <div>
            <p className={s.aboutHeader}>{"О СЕБЕ"}</p>
            <p className={s.aboutText}>{aboutText}</p>
          </div>
        </div>
        <div className={s.progress}>
        <p style={{ fontSize: '14px' }}>{"ПРОЕКТЫ"}</p>
          <Progress />
        </div>
        
        <div className={s.progress}>
        <p style={{ fontSize: '14px' }}>{"ОБРАЗОВАНИЕ:"}</p>
          {/* {education} */}
        </div>

        <div className={s.progress}>
        <p style={{ fontSize: '14px' }}>{"ПОСЛЕДНИЕ ПРОЕКТЫ (2023-2024):"}</p>
          <LastProjects />
        </div>

      </div>

      <div className={s.footer}>
        <Footer />
      </div>

    </div>
  )
}