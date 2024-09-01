import axios from "axios";
import React, { useCallback, useRef, useState } from "react"
import { useFetchDemandes } from "../utils/useFetchDemandes";


type FormDemande = {
    nom: string,
    demande: string,
}
export default function Form() {
    const [demande, setDemande] = useState<FormDemande>({ nom: "", demande: "" });
    const [sending, setSending] = useState<boolean>(false);
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

        if (sending) return;

        const payload = {
            nom: demande.nom,
            demande: demande.demande,
        }

        try {
            const response = await axios.post("http://localhost:6001/api/recipes/demande-recipe", payload);

            if (!response.data) return;

            if (response.data) {
                
                setSubmit(true);
                animateBtn(response.data.message);
                }

        } catch (error) {
            console.error("Erreur sur la soumission : ", error);
        }
    }

    const animateBtn = (response : string) => {
        setSending(true);

        const t = setTimeout(() => {
            setSending(false);
            
            if (resultRef.current) {
                resultRef.current.textContent = response;
                setDemande({
                    nom: "",
                    demande: ""
                });
                
            }
            
            resetResultRefContent();
        }, 3000) 
        return () => clearTimeout(t);
    }

    const resetResultRefContent = useCallback(() => {
        if (resultRef.current?.textContent !== "") {
            const t = setTimeout(() => {
                if (resultRef.current) {
                    resultRef.current.textContent = "";
                }
                window.location.reload();
            }, 2000);

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
                <div className="flex flex-col w-full">
                <button
                    className="flex justify-center items-center text-[#29323C] hover:border-[#29323C]"
                    type="submit">{!sending ? "Soumettre votre demande" : <img src="/src/assets/images/spinner_medium.png" alt="spinner"
                    className="w-6 h-6 animate-spin"
                    /> } </button>
                </div>
            </form>
        </div>
    )
}