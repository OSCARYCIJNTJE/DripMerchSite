import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './assets/Drip logo outer.svg'

function Nav(){
    return(
        <>
        <nav className='d-flex justify-content-evenly align-items-center'>
            <div className="Logo">
                <img src={logo} alt="" />
            </div>

            <div className="links">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Products</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Nav;