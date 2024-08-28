import React, { useState } from "react"


type FormDemande = {
    nom : string,
    demande : string,
}
export default function Form() {
    const [demande, setDemande] = useState<FormDemande>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = event.target;
        console.log(value)
        setDemande(prev => {
            return ({
                ...prev,
                [name] : value
            })
        });
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
 
    return (
        <div>
            <form action="#" method="post" className="max-w-[350px] container-recipe border-[1px]"
            onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="nom">Votre nom</label>
                    <input type="text" name="nom" id="nom"
                        className="w-full"
                        onChange={handleChange}
                        value={ demande ? demande.nom : "" }
                    />
                </div>
                <div>
                    <label htmlFor="demande">Votre demande</label>
                    <textarea name="demande" id="demande"
                        className="w-full min-h-[100px] max-h-[200px]"
                        onChange={handleChange}
                    >{demande ? demande.demande : "" }</textarea>
                </div>
                <button
                    className=" text-[#29323C] hover:border-[#29323C]"

                    type="submit">Soumettre votre demande</button>
            </form>
        </div>
    )
}