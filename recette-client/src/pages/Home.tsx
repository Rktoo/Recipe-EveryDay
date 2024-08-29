import { Link } from "react-router-dom";

export default function Home() {

    const subCategories = [
        { "titre": "Etes-vous prêt à démarrer cette aventure ?", "lien" : "/recipes"},
        { "titre": "Les menus populaires du moment", "lien" : "/popular"},
        { "titre": "Notre liste de favoris prête à vous surprendre", "lien" : "/favorites"},
    ]
    return (
        <div >
            <div className="container-recipe flex flex-col gap-2 mb-10 px-4 py-2 backdrop-blur-md rounded-xl ">
                <h1>Recipe Every Day</h1>
                <p>Votre source quotidienne d'inspiration culinaire pour des repas savoureux et faciles à préparer.</p>
                <p>Nous sommes votre guide quotidien pour cuisiner facilement</p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center gap-2 ">
            {
                subCategories && subCategories.map(sub => (
            <div className="container-recipe w-[300px] flex flex-col justify-end items-end px-4 py-2 backdrop-blur-md rounded-xl " key={sub.titre}>
                <p className="bg-">{sub.titre}</p>
                <Link to={sub.lien}><button className="text-[#29323C] hover:border-[#29323C]">Démarrer</button></Link>
            </div>
                ))
            }
            </div>
            <div className="h-[10vh] md:h-[30vh]"></div>
        </div>
    )
}