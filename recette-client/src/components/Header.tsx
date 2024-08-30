import { Link } from 'react-router-dom'

export default function Header() {

  const menuNavbar = [
    { 'nom': "Accueil", "icon": "bg-[url('/images/navbar/accueil.jpg')]", "lien": "/home" },
    { 'nom': "Recettes", "icon": "bg-[url('/images/navbar/categories.jpg')]", "lien": "/recipes" },
    { 'nom': "Populaires", "icon": "bg-[url('/images/navbar/populaire.png')]", "lien": "/popular" },
    { 'nom': "Favoris", "icon": "bg-[url('/images/navbar/favori.jpg')]", "lien": "/favorite" },
  ];

  return (
    <header className='relative top-0 w-full z-50'>
      <nav className='max-w-6xl mx-auto pt-4 px-10  flex flex-col justify-between items-center gap-4'>
        <div className='h-10 md:h-10'>
        </div>
        <ul className='fixed flex flex-row gap-1 border-2 rounded-full px-10 overflow-hidden backdrop-blur-md'>
          {
            menuNavbar && menuNavbar.map(menu => {
              return (
                <Link to={menu.lien} className='text-white hover:text-white ' key={menu.nom} >
                <li className={`my-1 px-4 py-4 ${menu.icon} bg-cover opacity-75 hover:scale-x-110 hover:z-[60] hover:opacity-100 transition-all duration-100 ease-in-out text-white rounded-full`} title={menu.nom} >
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