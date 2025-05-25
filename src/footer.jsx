import logo from './assets/Drip logo outer.svg'

function Footer(){
      return (
        <>
          <footer className="d-flex align-items-center justify-content-evenly">
            <div className="Logo">
                <img src={logo} alt="" />
            </div>
            
            <div className="links">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Products</a></li>
                </ul>
            </div>
            <div className="contacts">
                <ul>
                    <li><b>Email : </b>drip@hotmal.com</li>
                    <li></li>
                    <li><b>Number : </b>00000000</li>
                </ul>
            </div>
          </footer>
        </>
    )
}

export default Footer;