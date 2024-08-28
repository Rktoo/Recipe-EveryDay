import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <header className='relative top-0 w-full shadow-lg '>
          <nav className='max-w-6xl mx-auto px-10 flex flex-row justify-between items-center gap-4 '>
            <Link to={"/"}>
            <div >
                Logo
            </div>
        </Link>
            <ul className='flex flex-row gap-2'>
                <li className='py-4'>Accueil</li>
                  <li className='py-4'>Contact</li>
            </ul>
            
        </nav>
    </header>
  )
}