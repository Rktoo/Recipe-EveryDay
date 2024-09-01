import React, { useEffect, useState } from 'react'

type Props = {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
    const [query, setQuery] = useState<string>('');
    const [lastQuery, setLastQuery] = useState<string>("");
    const [debounceTimer, setDebounceTimer] = useState<number | null>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
    };

    // Soumission de la requete
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(debounceTimer){
            clearTimeout(debounceTimer);
        }

        if(query !== lastQuery) {
            onSearch(query);
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    // Soumission de la requete à chaque frappe avec un throttle de 500ms et s'arrête quand on quitte le focus
    useEffect(() => {

        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        if (isFocused && query !== lastQuery) {
            if(query.trim() === "")return;
            const t = setInterval(() => {
                onSearch(query);
                setLastQuery(query);
            }, 500);

            setDebounceTimer(Number(t));

            return () => {
                clearInterval(t)
            };
        }
    }, [query,isFocused])

    return (
        <form onSubmit={handleSubmit} className="search-bar flex flex-row gap-2">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Rechercher des recettes..."
                className="search-input rounded-full w-[300px] 
                backdrop-blur-[2px] focus:outline-[1px] focus:outline-white"
            />
            <button type="submit" className="rounded-full bg-green-500 hover:bg-green-600 text-white focus:bg-green-600 focus:outline-green-800">
                Rechercher
            </button>
        </form>
    );
};
