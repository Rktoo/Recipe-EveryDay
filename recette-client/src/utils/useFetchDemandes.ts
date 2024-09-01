import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export type Demande = {
    _id: string,
    name: string,
    demande: string,
    createdAt : string,
}

export const useFetchDemandes = () => {
    const [demandes, setDemandes] = useState<Demande[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [submit, setSubmit] = useState<boolean>(false);

    const formatCreateAt = (date:string) => {
        const dateF = new Date(date).getUTCDate();
        const monthF = Number(new Date(date).getUTCMonth()) + 1;
        const yearF = new Date(date).getFullYear();

        
        return String(formateDayOrMonth(dateF)) + " - " + String(formateDayOrMonth(monthF)) + " - " + String(yearF);
    }

    const formateDayOrMonth = (value : string | number) => {
        if(Number(value) < 10) {
            return "0" + String(value);
        } else {
            return value;
        }
    }
    
    const getAllDemande = useCallback(async () => {
        try {
            if (submit === true ) {
                const result = await axios.get("http://localhost:6001/api/recipes/demande-recipe");

                setError(false);
                setDemandes(result.data);
            } else {
                const result = await axios.get("http://localhost:6001/api/recipes/demande-recipe");
                setDemandes(result.data);
                setError(false);

            }
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }, [submit]);

    useEffect(() => {
        getAllDemande();
    }, [getAllDemande])

    useEffect(() => {
        if (submit) {
            getAllDemande();
            setSubmit(false);
        }
    }, [submit, getAllDemande])

    return { demandes, error, setSubmit, formatCreateAt };
}