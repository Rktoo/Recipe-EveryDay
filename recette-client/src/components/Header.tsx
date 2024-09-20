import { Link } from 'react-router-dom'

export default function Header() {

  const menuNavbar = [
    { 'nom': "Accueil", "icon": "bg-[url('/images/navbar/accueil.jpg')]", "lien": "/home" },
    { 'nom': "Recettes", "icon": "bg-[url('/images/navbar/categories.jpg')]", "lien": "/recipes" },
    { 'nom': "Populaires", "icon": "bg-[url('/images/navbar/populaire.png')]", "lien": "/popular" },
    { 'nom': "Favoris", "icon": "bg-[url('/images/navbar/favori.jpg')]", "lien": "/favorite" },
  ];

  return (
    <header className='relative top-0 z-50'>
      <nav className='pt-4 px-10 flex flex-col justify-between items-center gap-4'>
        <div className='h-20 md:h-24'>
        </div>
        <ul className='fixed flex flex-row max-sm:justify-between max-sm:items-center gap-1 px-6 max-sm:mx-auto max-sm:px-1 border-2 border-transparent animate-border-glow rounded-full overflow-hidden backdrop-blur-md transition-all duration-150 ease-in-out'>
          {
            menuNavbar && menuNavbar.map(menu => {
              return (
                <Link to={menu.lien} className='text-white hover:text-white ' key={menu.nom} >
                  <li className={`my-1 px-4 py-4 max-sm:px-3 max-sm:py-3 max-sm:w-11/12 max-sm:text-sm ${menu.icon} bg-cover opacity-75 hover:scale-x-110 hover:z-[60] hover:opacity-100 transition-all duration-100 ease-in-out text-white rounded-full`} title={menu.nom} >
                    {menu.nom}
                  </li>
                </Link>
              )
            }
            )
          }
        </ul>

      </nav>
    </header>
  )
}