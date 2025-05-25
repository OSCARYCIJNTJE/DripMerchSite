import { Outlet } from 'react-router-dom'
import Nav from './nav.jsx'
import Footer from './footer.jsx'

export default function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet /> {/* This renders the current page's component */}
      </main>
      <Footer />
    </>
  )
}
