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
            gsap.fromTo(subCategoriesRef.current, {
                opacity : 0.95,
                y: 0
            },{
                duration : 0.6,
                opacity : 1,
                y : -10,
                ease : "elastic.out",
                stagger : {
                    yoyo : true,
                    each : 0.05,
                    repeat : 1,
                    from : "edges",
                }
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
                        className="container-recipe w-[300px] flex flex-col justify-between items-end px-4 py-2 border-[1px] border-white backdrop-blur-md rounded-xl opacity-0" 
                        key={sub.titre}>
                            <p className="">{sub.titre}</p>
                            <Link to={sub.lien}><button className=" bg-[#2FA855]/80 text-white/90 hover:border-[#29323C]">Démarrer</button></Link>
                        </div>
                    ))
                }
            </div>
            <div className="h-[10vh] md:h-[30vh]"></div>
        </div>
    )
}