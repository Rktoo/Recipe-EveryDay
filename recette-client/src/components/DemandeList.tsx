import { useFetchDemandes } from "../utils/useFetchDemandes";


export default function DemandeList() {
    const { demandes, error, formatCreateAt } = useFetchDemandes();


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
                        console.log(demande.createdAt)
                        return <li className="min-w-64 flex flex-col justify-between gap-2" key={demande?._id}>
                            <div className="grid grid-cols-2 items-start">
                                <div className="flex flex-col">
                                    <h3 className="text-lg"><strong>{demande.name}</strong></h3>
                                    <p >{demande.demande}</p>
                                </div>
                                <div className="w-full flex justify-end mt-2 ">
                                    <p className="text-xs">{formatCreateAt(demande.createdAt)}</p>
                                </div>
                            </div>
                            <hr className="mb-4" />
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
