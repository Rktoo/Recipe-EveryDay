import React, { useState } from 'react'

type Props = {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
    const [query, setQuery] = useState<string>('');
    const [debounceTimer, setDebounceTimer] = useState<number | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = event.target.value;
        setQuery(newQuery);

        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        const t = setInterval(() => {
            onSearch(newQuery);
        }, 500);

        setDebounceTimer(t);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(debounceTimer){
            clearTimeout(debounceTimer);
        }
        onSearch(query);
    };

    

    return (
        <form onSubmit={handleSubmit} className="search-bar flex flex-row gap-2">
            <input
                type="text"
                value={query}
                onChange={handleChange}
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
