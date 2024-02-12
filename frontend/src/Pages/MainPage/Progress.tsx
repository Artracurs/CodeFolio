import s from './Progress.module.scss';

type Props = {}

export default function Progress({ }: Props) {

  const progressList = [
    {
      title: 'Артель Мебель',
      position: 'Мастер-технолог, разработчик',
      date: 'Март 2022 - По настоящее время | Актобе, Казахстан',
      directResponsibilities: 'Проектирование и изготовление мебели',
      additional: ['Разработка станка с ЧПУ', 'CRM система', 'Веб приложение для автоматизации']
    },
    {
      title: 'ИП “Нураглеев Р.Р.”',
      position: 'Техник по ремонту электроники',
      date: 'Авг. 2019 - Сен. 2020 | Респ. Башкортостан, Россия',
      directResponsibilities: 'Ремонт компьютеров, телефонов, телевизоров, принтеров и прочей мелкой бытовой и офисной техники',
      additional: []
    },
    {
      title: 'ИП “Нургалеев Р.Р.”',
      position: 'Графический дизайнер, фрилансер',
      date: 'Авг. 2014 - Сен. 2020 | Респ. Башкортостан, Россия',
      directResponsibilities: 'Разработка фирменного стиля, 3D моделирование, визуализация',
      additional: []
    },
    {
      title: 'ООО “Диалог”',
      position: 'Графический дизайнер',
      date: 'Дек. 2008 - Дек. 2009 | Респ. Башкортостан, Россия',
      directResponsibilities: 'Разработка логотипов, баннеров для интернет-рекламы, листовок, буклетов и прочей печатной и цифровой продукции. Работа с принтерами.',
      additional: []
    }
  ];

  return (
    <div className={s.container}>
      {progressList.map((el) =>
        <div key={el.title}>
          <div>
            <span className={s.title}>
              {`"`}{el.title}{`"`}{', '}
            </span>
            <span className={s.position}>{el.position}</span>
          </div>
          <div>
            <span className={s.date}>{el.date}</span>
          </div>
          <div className={s.respo}>
            <span> <strong>Прямые обязанности: </strong></span>
            {el.directResponsibilities}
            <div className={s.additionalList}>
              {el.additional[0] && <>
                <span> <strong>Прочие обязанности:</strong></span>
                {el.additional.map((add) => <li>{add}</li>)}
              </>}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}