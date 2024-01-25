import s from './MainPage.module.scss'

type Props = {
  footerText: string[]
}

export default function MainPage({footerText}: Props) {
  const aboutText = `Имею опыт в радиоэлектронике и разработке своих устройств на ARM, AVR; работал графическим дизайнером, могу сделать UI любой сложности; разрабатывал небольшие мобильные и веб приложения. В данный момент  работаю в мебельной компании мастером-технологом, и занимаюсь автоматизацией и оцифровкой бизнеса. 
  Основной стек - React + Node / Python  + PostgreSQL. Очень привлекает промышленный дизайн, но программирование хочу сделать своей основной деятельностью.`

  return (
    <div className={s.container}>
      <div className={s.left}> left</div>
      
      <div className={s.main}>
        <div className={s.header}>
          <p className={s.name}>{"RUSLAN NURGALEEV"}</p>
          <p className={s.position}>{"FULL STACK ENGINEER"}</p>
          <div className={s.telegram}>
            {'Telegram - @lanneq'}
          </div>
        </div>
        <div className={s.info}>
          <div>
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
      </div>

        <div className={s.footer}>footer</div>
    
    </div>
  )
}