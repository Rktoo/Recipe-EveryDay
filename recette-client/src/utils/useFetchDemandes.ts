import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export type Demande = {
    _id: string,
    name: string,
    demande: string
}

export const useFetchDemandes = () => {
    const [demandes, setDemandes] = useState<Demande[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [submit, setSubmit] = useState<boolean>(false);

    const getAllDemande = useCallback(async () => {
        try {
            const result = await axios.get("http://localhost:6001/api/recipes/demande-recipe");
            setDemandes(result.data);
            setError(false);
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }, []);

    useEffect(() => {
        if(submit) {
            getAllDemande().finally(() => setSubmit(false));
        }
    }, [submit, getAllDemande])

    return { demandes, error, setSubmit };
}