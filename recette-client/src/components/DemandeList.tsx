import { useFetchDemandes } from "../utils/useFetchDemandes";


export default function DemandeList() {
    const {demandes, error} = useFetchDemandes();


    return (
        <div className="container-recipe border-[0.5px]">
            <ul className="">
                {
                    error && <li className="flex flex-col gap-2">
                        <h3>Impossible de charger la liste des demandes</h3>
                    </li>
                }
                {
                    demandes && demandes.map(demande => {
                        return <li className="min-w-64 flex flex-col gap-2" key={demande?._id}>
                            <h3><strong>{demande.name}</strong></h3>
                            <p >{demande.demande}</p>
                            <hr className="mb-4"/>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
