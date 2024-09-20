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
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        if (query !== lastQuery) {
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
            if (query.trim() === "") return;
            const t = setInterval(() => {
                onSearch(query);
                setLastQuery(query);
            }, 500);

            setDebounceTimer(Number(t));

            return () => {
                clearInterval(t)
            };
        }
    }, [query, isFocused])

    return (
        <form onSubmit={handleSubmit} className="search-bar max-sm:w-10/12 flex flex-row justify-center gap-2">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Rechercher des recettes..."
                className="
                search-input 
                rounded-full sm:w-[300px] max-sm:w-[150px]
                backdrop-blur-[2px]
                 "
            />
            <button type="submit" className="max-sm:w-[100px] max-sm:text-sm flex justify-center items-center rounded-full bg-[#2FA855]/80 hover:bg-[#2FA855] text-white focus:bg-[#2FA855] focus:outline-green-800">
                Rechercher
            </button>
        </form>
    );
};
