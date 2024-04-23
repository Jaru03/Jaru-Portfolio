import { useTranslation } from "react-i18next"

type Props = {
  CardId:number
  CardTittle:string
  CardInfo:string
  IconRout?:string
  IconRout2?:string
  DemoLink:string
  GitHubLink:string
} 

const ProyectCard = ({CardId, CardTittle, CardInfo, IconRout, IconRout2, DemoLink, GitHubLink}:Props) => {
  
  const {t} = useTranslation()

  return (
    <article>
      <main className={`proyectCard proyectCard--${CardId}`}>

        <div className="proyectCard__div">
          <header>
            <h3>{CardTittle}</h3>
          </header>

          <main>
            <p>
              {CardInfo}
            </p>
          </main>

          <footer>
            <img src="../../../../React.png" width={35} alt="" />
            
            {
              IconRout?<img src={IconRout} width={35} alt="" /> : null
            }
            
            {
              IconRout2?<img src={IconRout2} width={35} alt="" /> : null
            }
          </footer>
        </div>
      </main>
      <footer className="proyectCard__footer">
        <a className="proyectCard__button" target="_blank" href={DemoLink}>{t('proyects.button-demo')}</a>
        <a className="proyectCard__button" target="_blank" href={GitHubLink}>GitHub</a>
      </footer>
    </article>
  )
}

export default ProyectCard