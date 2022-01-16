import { useState } from "react"
import { Navbar } from "react-bulma-components"
import { useNavigate } from "react-router"
import gcn from "getclassname"

const Nav = () => {
  const [isActive, setActive] = useState(false)
  const navigate = useNavigate()

  const handleNavigateTo = (to) => () => {
    navigate(`project/${to}`)
  }

  const handleBurger = () => {
    setActive(x => !x)
  }

  const cl = gcn({
    "is-active": isActive
  })

  return <Navbar trans role="navigation" aria-label="dropdown navigation">
    <Navbar.Brand>
      <Navbar.Burger onClick={handleBurger} className={cl}/>
    </Navbar.Brand>
    <Navbar.Menu id="navMenu" className={cl}>
      <Navbar.Container>
        <Navbar.Item onClick={handleNavigateTo("..")}>
          Home
        </Navbar.Item>
        <Navbar.Item hoverable>
          <Navbar.Link arrowless={isActive}>
            Work
          </Navbar.Link>
          <Navbar.Dropdown boxed>
            <Navbar.Item onClick={handleNavigateTo("jpmc")}>
              JP Morgan services documentation
            </Navbar.Item>
            <Navbar.Divider/>
            <Navbar.Item onClick={handleNavigateTo("repay-consumer")}>
              Repay consumer-facing
            </Navbar.Item>
            <Navbar.Item onClick={handleNavigateTo("repay-admin")}>
              Repay admin-facing
            </Navbar.Item>
            <Navbar.Divider/>
            <Navbar.Item onClick={handleNavigateTo("hogaru")}>
              Hogaru.com
            </Navbar.Item>
            <Navbar.Divider/>
            <Navbar.Item onClick={handleNavigateTo("nequi")}>
              Nequi Neobank
            </Navbar.Item>
            <Navbar.Divider/>
            <Navbar.Item onClick={handleNavigateTo("rappi")}>
              Rappi
            </Navbar.Item>
            <Navbar.Divider/>
            <Navbar.Item onClick={handleNavigateTo("endava")}>
              Endava Ramp-Up Journal
            </Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>
      </Navbar.Container>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class=" button" 
                data-social-network="Linkedin" 
                data-social-target="https://www.linkedin.com/in/albertoalonsog/" 
                target="_blank"  
                rel="noreferrer"
                href="https://www.linkedin.com/in/albertoalonsog/"
              >
                <span class="icon">
                  <i class="fa fa-linkedin"></i>
                </span>
                <span>
                  Linkedin
                </span>
              </a>
            </p>
            <p class="control">
              <a class="button" href="http://github.com/a-alonso" target="_blank" rel="noreferrer">
                <span class="icon">
                  <i class="fa fa-github"></i>
                </span>
                <span>Github</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </Navbar.Menu>
  </Navbar>
}

export default Nav