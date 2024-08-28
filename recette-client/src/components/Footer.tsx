

export default function Footer() {
    const date = new Date();
    
  return (
      <footer className="fixed bottom-0 w-full border-t-2 bg-green-500 text-white">
        <div 
              className="max-w-6xl mx-auto px-10 min-h-14 flex justify-start items-center text-start "
        >
            <div className="">
              <span>&copy; {date.getFullYear()}</span>
              </div>
        </div>
    </footer>
  )
}