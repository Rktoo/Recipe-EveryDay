import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { animateElement } from "../utils/animateElement";

export default function Home() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const subCategoriesRef = useRef<HTMLDivElement[]>([]);

    const subCategories = [
        { "titre": "Etes-vous prêt à démarrer cette aventure ?", "lien": "/recipes" },
        { "titre": "Les menus populaires du moment", "lien": "/popular" },
        { "titre": "Notre liste de favoris prête à vous surprendre", "lien": "/favorite" },
    ];

    useEffect(() => {
        animateElement(containerRef);

        if (subCategoriesRef.current) {
            subCategoriesRef.current.forEach((element) => {
                gsap.from(element, {
                    duration : 0.8,
                    opacity : -0.5,
                    y : 10,
                    ease : "power3.out",
                    delay : 0.2 ,
                });
                gsap.to(element, {
                    duration : 1,
                    opacity : 1,
                    y : 0,
                    ease : "power3.Out",
                    delay : 0.1,
                });
            });
        }
    }, []);

    return (
        <div >
            <div 
            ref={containerRef}
            className="container-recipe flex flex-col gap-2 mb-10 px-4 py-2 border-[1px] border-white backdrop-blur-md rounded-xl opacity-0">
                <h1>Recipe Every Day</h1>
                <p>Votre source quotidienne d'inspiration culinaire pour des repas savoureux et faciles à préparer.</p>
                <p>Nous sommes votre guide quotidien pour cuisiner facilement.</p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center gap-2 ">
                {
                    subCategories && subCategories.map((sub, index) => (
                        <div 
                        ref={el => (subCategoriesRef.current[index] = el!)}
                        className="container-recipe w-[300px] flex flex-col justify-end items-end px-4 py-2 border-[1px] border-white backdrop-blur-md rounded-xl opacity-0" 
                        key={sub.titre}>
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