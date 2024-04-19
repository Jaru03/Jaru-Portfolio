import { useTranslation } from 'react-i18next'
import './style/Footer.css'

const Footer = () => {

  const {t} = useTranslation()

  return (
    <footer className="footer">
      <p className="footer__text">{t("footer.description")}</p>
    </footer>
  )
}

export default Footer