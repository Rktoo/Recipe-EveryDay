import { Link } from "react-router-dom";


export default function Footer() {
  const date = new Date();

  return (
    <footer className="fixed bottom-0 w-full border-t-2 text-white backdrop-blur-md">
      <div
        className="max-w-6xl mx-auto px-10 min-h-14 flex justify-start items-center text-start "
      >
        <div className="w-full flex flex-row justify-between">
          <span>&copy; {date.getFullYear()} - Rktoo</span>
          <div className="flex flex-row gap-2">
            <Link to={"/demande"} className="hover:underline underline-offset-4"><p>Demander une recette</p></Link>
            <Link to={"/mention-legale"} className="hover:underline underline-offset-4"><p>Mention légale</p></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}