import 'bootstrap/dist/css/bootstrap.min.css'

function Nav(){
    return(
        <>
        <nav className='d-flex justify-content-evenly align-items-center'>
            <div className="Logo">
                <h1>Logo</h1>
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