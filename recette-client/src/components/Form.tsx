import axios from "axios";
import React, { useCallback, useRef, useState } from "react"
import { useFetchDemandes } from "../utils/useFetchDemandes";


type FormDemande = {
    nom: string,
    demande: string,
}
export default function Form() {
    const [demande, setDemande] = useState<FormDemande>({ nom: "", demande: "" });
    const resultRef = useRef<HTMLDivElement | null>(null);
    const { setSubmit } = useFetchDemandes();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setDemande(prev => {
            return ({
                ...prev,
                [name]: value
            })
        });
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (demande.nom.trim() === "" || demande.demande.trim() === "") return;

        const payload = {
            nom: demande.nom,
            demande: demande.demande,
        }

        try {
            const response = await axios.post("http://localhost:6001/api/recipes/demande-recipe", payload);

            if (!response.data) return;

            if (response.data) {
                if (resultRef.current) {
                    resultRef.current.textContent = response.data.message;
                    setDemande({
                        nom: "",
                        demande: ""
                    });
                    setSubmit(true)
                    resetResultRefContent();
                }
            }

        } catch (error) {
            console.error("Erreur sur la soumission : ", error);
        }
    }

    const resetResultRefContent = useCallback(() => {
        if (resultRef.current?.textContent !== "") {
            const t = setTimeout(() => {
                if (resultRef.current) {
                    resultRef.current.textContent = "";
                }
            }, 5000);

            return () => clearTimeout(t);
        }
    }, [])


    return (
        <div className="w-full flex flex-col justify-center items-center md:items-start">
            <form action="#" method="post" className="max-w-[350px] container-recipe border-[1px] rounded-lg"
                onSubmit={handleSubmit}
            >
                <div
                    ref={resultRef}
                    className="text-green-400"
                ></div>
                <div>
                    <label htmlFor="nom">Votre nom</label>
                    <input type="text" name="nom" id="nom"
                        className="w-full"
                        onChange={handleChange}
                        value={demande ? demande.nom : ""}
                    />
                </div>
                <div>
                    <label htmlFor="demande">Votre demande</label>
                    <textarea name="demande" id="demande"
                        className="w-full min-h-[100px] max-h-[200px]"
                        onChange={handleChange}
                        value={demande.demande}
                    />
                </div>
                <button
                    className=" text-[#29323C] hover:border-[#29323C]"

                    type="submit">Soumettre votre demande</button>
            </form>
        </div>
    )
}