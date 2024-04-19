import { useTranslation } from "react-i18next";
import ProyectCard from "./ProyectCard";
import "./style/Proyects.css";

const Proyects = () => {

  const {t} = useTranslation()

  return (
    <section id="proyects"  className="proyects">
      <h2 className="proyects__tittle subtittle">{t("proyects.tittle")}</h2>

      <div className="container__card">
        <ProyectCard DemoLink="https://hotels-app-six.vercel.app/#/" GitHubLink="https://github.com/Jaru03/Hotels-App " IconRout='../../../../redux.svg' CardInfo={t("proyects.proyect-1.description")} CardTittle={t("proyects.proyect-1.tittle")} CardId={1}/>
        <ProyectCard DemoLink="https://poke-api-phi-six.vercel.app/" GitHubLink="https://github.com/Jaru03/PokeAPI" IconRout='../../../../tailwind.png' CardInfo={t("proyects.proyect-2.description")} CardTittle={t("proyects.proyect-2.tittle")} CardId={2}/>
        <ProyectCard DemoLink="https://users-crud-sand.vercel.app/" GitHubLink="https://github.com/Jaru03/Users-CRUD" IconRout='../../../../tailwind.png' CardInfo={t("proyects.proyect-3.description")} CardTittle={t("proyects.proyect-3.tittle")} CardId={3}/>
        <ProyectCard DemoLink="https://rick-and-morty-ten-silk.vercel.app/" GitHubLink="https://github.com/Jaru03/RickAndMorty" IconRout='../../../../tailwind.png' CardInfo={t("proyects.proyect-4.description")} CardTittle={t("proyects.proyect-4.tittle")} CardId={4}/>
        <ProyectCard DemoLink="https://weather-app-nine-peach.vercel.app/" GitHubLink="https://github.com/Jaru03/Weather-App" CardInfo={t("proyects.proyect-5.description")} CardTittle={t("proyects.proyect-5.tittle")} CardId={5}/>
        <ProyectCard DemoLink="https://concepts-react-ruddy.vercel.app/" GitHubLink="https://github.com/Jaru03/Concepts-React" CardInfo={t("proyects.proyect-6.description")} CardTittle={t("proyects.proyect-6.tittle")} CardId={6}/>
        
      </div>

      <article className="proyects__icon proyects__icon--1"></article>
      <article className="proyects__icon proyects__icon--2"></article>
      <article className="proyects__icon proyects__icon--3"></article>
      <article className="proyects__icon proyects__icon--4"></article>
      <article className="proyects__icon proyects__icon--5"></article>
      <article className="proyects__icon proyects__icon--6"></article>
      <article className="proyects__icon proyects__icon--7"></article>
    </section>
  );
};

export default Proyects;
