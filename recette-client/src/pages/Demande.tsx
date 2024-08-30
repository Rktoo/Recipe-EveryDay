import DemandeList from "../components/DemandeList";
import Form from "../components/Form";

export default function Demande() {
    return (
        <div className="">
            <div className='title px-8 border-[1px] border-white rounded-xl backdrop-blur-md'>
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
                <DemandeList/>
            </div>
        </div>
    )
}