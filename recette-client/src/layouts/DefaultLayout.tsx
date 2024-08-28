import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function DefaultLayout() {
  return (
    <>
        <Header />
        <main 
        className='max-w-6xl mx-auto px-10 my-4'
        >
            <Outlet/>
        </main>
        <div className='h-20'></div>
        <Footer/>
    </>
  )
}