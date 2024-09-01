import { useEffect, useRef } from "react"
import { animateElement } from "../utils/animateElement"

export default function Mention() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    animateElement(containerRef)
  }, [])
  return (
    <div 
      ref={containerRef}
    className="h-screen px-4 py-2 container-recipe rounded-xl border-[0.5px] opacity-0">
      <h1>Mention Légale</h1>
      <div>
        <section>
          <h2 className="underline underline-offset-2">Éditeur du site</h2>
          <p>
            Le site Recipe Every Day est édité par :
            <br />
            - Nom de l'entreprise : Rktoo
            <br />
            - Forme juridique : SA
            <br />
            - Capital social : NA
            <br />
            - Siège social : La ville de l'inconnue
            <br />
            - RCS : NA
            <br />
            - Numéro de TVA : NA
          </p>
        </section>

        <section>
          <h2 className="underline underline-offset-2">Directeur de la publication</h2>
          <p>
            Nom du directeur de la publication : Rktoo
            <br />
            Contact : https://github.com/Rktoo
          </p>
        </section>

        <section>
          <h2 className="underline underline-offset-2">Données personnelles</h2>
          <p>
            Rktoo s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site Recipe Every Day, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
          </p>
          <p>
            Pour toute information ou exercice de vos droits Informatique et Libertés sur les traitements de données personnelles gérés par Rktoo, vous pouvez contacter son délégué à la protection des données (DPO) :
            <br />
            Par courrier : courriel exemple
            <br />
            Par email : email exemple
          </p>
        </section>
      </div>
    </div>
  )
}