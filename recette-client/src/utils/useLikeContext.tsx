import React, { createContext, useContext, useEffect, useState } from "react";

interface StateContextProps {
    liked : boolean;
    itemLiked : string[];
    _setLiked : (value:boolean) => void;
    saveItemLiked : (item:string) => void;
    checkItemLiked : (id:string) => void;
}

const StateContext = createContext<StateContextProps>({
    liked: false,
    itemLiked: [],
    _setLiked: () => { },
    saveItemLiked: () => { },
    checkItemLiked: () => { }
});

export const ContextProvider = ({ children }: {children:React.ReactNode}) => {
    const [liked, setLiked] = useState<boolean>(false);
    const [itemLiked, setItemLiked] = useState<string[]>([]);

    useEffect(() => {
        const storedItems = window.localStorage.getItem("_iTemLiked_");
        if (storedItems) {
            setItemLiked(JSON.parse(storedItems));
        }
    }, []);

    const saveItemLiked = (item: string) => {
        const updateItems = [...itemLiked, item];
        setItemLiked(updateItems);

        window.localStorage.setItem("_iTemLiked_", JSON.stringify(updateItems));
        setLiked(true);
    }

    const checkItemLiked = (id: string) => {
        if (itemLiked.includes(id)){
            setLiked(true);
        } else {
            setLiked(false);
        }
    }
    const _setLiked = (value: boolean) => {
        setLiked(value)
    }
    return (
        <StateContext.Provider value={{ liked, itemLiked, _setLiked,  checkItemLiked, saveItemLiked }}>
            {children}
        </StateContext.Provider>
    )
}

export const useLikeContext = () => useContext(StateContext);