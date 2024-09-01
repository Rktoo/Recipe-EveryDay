import { useEffect, useRef } from "react";
import DemandeList from "../components/DemandeList";
import Form from "../components/Form";
import { animateElement } from "../utils/animateElement";

export default function Demande() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        animateElement(containerRef)
    }, [])
    return (
        <div className="">
            <div 
                ref={containerRef}
            className='title px-8 border-[1px] border-white rounded-xl backdrop-blur-md opacity-0'>
                <h1 className="my-4">Demander une recette</h1>
            </div>
            <div className='title flex flex-col sm:flex-row md:gap-2 !justify-start !items-start px-4 py-2 border-[1px] border-white rounded-xl backdrop-blur-md'>
                <p className="text-start">Oui, vous avez tout à fait la possibilité de faire une demande.</p>
                <p
                    className="text-start"
                >Ecrivez-nous juste en bas.</p>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
                <Form />
                <DemandeList />
            </div>
        </div>
    )
}