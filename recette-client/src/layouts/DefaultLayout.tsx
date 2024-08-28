import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function DefaultLayout() {

  
  return (
    <>
        <Header />
        <main 
        className="max-w-6xl mx-auto my-4 px-10 flex flex-col justify-center"
        >
            <Outlet/>
        </main>
        <div className='h-20'></div>
        <Footer/>
    </>
  )
}