import { useEffect } from "react";
import { officeMove } from "./../actions";
/* */
import Header from "./../component/header";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    officeMove();
  }, []);

  return (
    <>
      <Header title={["Unsere", "Experties"]} />
      <div className="officeBase">
        <img src="./image/office/far.png" alt="pic" className="firstP"></img>
        <img src="./image/office/close.png" alt="pic" className="secondP"></img>

        <img
          src="./image/office/laptop2.png"
          alt="laptop"
          className="laptop"
        ></img>
      </div>

      <div className="ourWork">
        <div data-aos="fade-right" className="workInfo">
          <h2>Social-Media Marketing</h2>
          <p>
            Social-Media-Marketing, ist ein Begriff aus dem Marketing und
            Management. Er beschreibt Strategien und Taktiken, mit denen
            Organisationen (bspw. Unternehmen, Parteien,
            Non-Profit-Organisationen) soziale Medien nutzen, um
            organisatorische Ziele zu erreichen, indem sie Wert für Stakeholder
            schaffen und kommunizieren[1]. Häufig adressierte Stakeholdergruppen
            im Social-Media-Marketing sind (potenzielle) Kunden, (potenzielle)
            Mitarbeiter, Blogger, Journalisten oder die Öffentlichkeit.
            Social-Media-Plattformen wie Facebook und Twitter haben im
            Social-Media-Marketing eine hohe Relevanz. Kritiker, insbesondere
            Datenschützer, monieren, diese Verfahren verletzten die Privatsphäre
            der Betroffenen, auf die Social-Media-Marketing zielt. Neben der
            Nutzung von sozialen Medien umfasst Social-Media-Marketing auf
            strategischer Ebene auch das Management einer Social-Media-Kultur,
            die Rolle von Mitarbeitern .
          </p>
        </div>
        <div data-aos="fade-left" className="workImg"></div>
        <div data-aos="fade-right" className="workImg"></div>
        <div data-aos="fade-left" className="workInfo">
          <h2>Content Creation</h2>
          <p>
            Als Digital Content Creation wird der Bereich innerhalb einer
            Produktionspipeline bezeichnet, der sich mit der Erstellung von
            multimedialen Inhalten beschäftigt. Darunter werden verschiedenste
            Technologien zusammengefasst. Generell fallen alle Werke, die
            grafischer Natur sind und computergestützt erzeugt wurden, in den
            Bereich der DCC. Da die Erstellung dieser Inhalte meistens ein
            kreativer Prozess ist, wird eine Fachkraft innerhalb eines Bereiches
            der DCC fast immer als Artist bezeichnet (3D-Artist,
            Compositing-Artist …). Der Begriff Content Creator
            (Medienschaffender) hingegen bezeichnet zumeist Personen mit
            Produktionswissen, die die Schaffung von Inhalten kreativ leiten
            (z.B. Regie führen). Die digitale Content Creation findet heutzutage
            oftmals außerhalb der Unternehmen statt
          </p>
        </div>
        <div data-aos="fade-right" className="workInfo">
          <h2>Visitenkarten & Flyer</h2>
          <p>
            Die Bezeichnung Visitenkarte rührt von der ursprünglichen Funktion
            her: Sie wurde früher beim Besuch in hohem Hause dem Diener oder der
            Empfangsdame übergeben, die sie dann an den Hausherrn oder die Dame
            des Hauses weiterreichte, so dass die besuchte Person gleich wusste,
            wer sie besuchte. Hatte man die betreffende Person nicht
            angetroffen, teilte man durch Abgabe der Visitenkarte mit, dass man
            den Besuch hatte machen wollen, er galt dann als erfolgt. Dies war
            vor allem dann von Bedeutung, wenn man neu in einen Ort gezogen war
            und einen Antrittsbesuch bei den Honoratioren machen musste. In
            früherer Zeit waren Visitenkarten meist nur mit dem Namen und ggf.
            dem Beruf bzw. Titel des Besitzers bedruckt, bei adligen Personen
            war auch ein Wappen üblich. Ehepaare konnten dabei eine gemeinsame
            Karte haben, wobei oftmals beide Ehepartner auch zusätzlich noch
            eigene Karten hatten.
          </p>
        </div>
        <div data-aos="fade-left" className="workImg"></div>
        <div data-aos="fade-right" className="workImg"></div>
        <div data-aos="fade-left" className="workInfo">
          <h2>Logos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            consectetur sapiente laboriosam, labore pariatur facilis alias iusto
            ipsam animi beatae, asperiores, hic ex excepturi architecto aut
            itaque sit dolorem illum aspernatur eum illo? Cum, rem soluta. Sunt
            libero delectus error dolorum iusto, atque maiores enim, accusantium
            sint exercitationem est provident natus non rerum minus, quia
            explicabo ipsa. Ipsam provident alias recusandae maiores fugit
            incidunt consequuntur quia excepturi reprehenderit quasi officia
            tempora neque molestias vel sed, ad in nemo ea nisi animi!
            Recusandae nisi dolor nam autem doloremque commodi placeat enim
            excepturi error, voluptatibus laborum eius quae ea perferendis est
            ad. Exercitationem neque laborum eum sed cumque. Deleniti facilis
            Quasi, laborum! Dolore cum, odit, vel veniam saepe perspiciatis sed
            tempora aspernatur eveniet doloremque exercitationem.
          </p>
        </div>
      </div>
    </>
  );
}
