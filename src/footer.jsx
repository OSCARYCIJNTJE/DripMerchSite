import logo from './assets/Drip logo outer.svg'

function Footer(){
      return (
        <>
          <footer className="d-flex align-items-center justify-content-evenly">
            <div className="Logo">
                <img src={logo} alt="" />
                <h4>More About Our Organization</h4>
                <p>This Organization was founded to mainly drip up kids with sport clothes after noticing that allot of them
                    do not have access to these.
                </p>
            </div>
            
            <div className="links">
                <h4>Check More</h4>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Products</a></li>
                </ul>
            </div>
            <div className='follow'>
                <h4>Follow us</h4>
                <ul>
                    <li><i class="fa-brands fa-instagram"></i> Instagram</li>
                    <li><i class="fa-brands fa-square-facebook"></i> Facebook</li>
                </ul>
            </div>
            <div className="contacts">
                <h4>Questions? Contact Us</h4>
                <ul>
                    <li> <i class="fa-solid fa-envelope"></i> <b>Email : </b>drip@hotmal.com</li>
                    <li><i class="fa-solid fa-square-phone-flip"></i> <b>Number : </b>00000000</li>
                </ul>
            </div>
          </footer>
        </>
    )
}

export default Footer;