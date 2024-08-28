import React, { useState } from 'react'

type Props = {
    onSearch : (query : string) => void;
}

export default function SearchBar({onSearch}: Props) {
    const [query, setQuery] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);

    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar flex flex-row gap-2">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Rechercher des recettes..."
                className="search-input rounded-full w-[300px] "
            />
            <button type="submit" className="rounded-full bg-green-500 hover:bg-green-600 text-white focus:bg-green-600 focus:outline-green-800">
                Rechercher
            </button>
        </form>
    );
};
