import { Fragment, useState } from "react"
import { Navbar } from "react-bulma-components"
import { useNavigate } from "react-router"
import { Maybe } from "jazzi"
import gcn from "getclassname"
import data from "../../core/app-data"

const buildItem = (onClick) => (acc,next) => {
  const { 
    group: prevGroup, 
    components
  } = acc

  const hasDivider = prevGroup
    .fmap(g => g !== next.group)
    .onNone(() => false)
  
  const comp = <Fragment key={`${next.id}-fragment`}>
    {hasDivider && <Navbar.Divider key={`${next.group}-divider`}/>}
    <Navbar.Item key={next.id} onClick={() => onClick(next.path || next.id)}>
      {next.linkText}
    </Navbar.Item>
  </Fragment>

  return {
    group: Maybe.fromFalsy(next.group),
    components: [...components, comp]
  }
}

const buildNavItems = (onClick) => {
  return data.projects.reduce(buildItem(onClick), {
    group: Maybe.None(),
    components: []
  }).components
}

const Nav = () => {
  const [isActive, setActive] = useState(false)
  const navigate = useNavigate()

  const handleNavigateTo = (to, exact=false) => {
    exact ? navigate(to) : navigate(`/project/${to}`)
  }

  const handleBurger = () => {
    setActive(x => !x)
  }

  const cl = gcn({
    "is-active": isActive
  })

  return <Navbar transparent role="navigation" aria-label="dropdown navigation">
    <Navbar.Brand>
      <Navbar.Burger onClick={handleBurger} className={cl}/>
    </Navbar.Brand>
    <Navbar.Menu className={cl}>
      <Navbar.Container>
        <Navbar.Item onClick={() => handleNavigateTo("/portfolio", true)}>
          Home
        </Navbar.Item>
        <Navbar.Item hoverable>
          <Navbar.Link arrowless={isActive}>
            Work
          </Navbar.Link>
          <Navbar.Dropdown boxed>
            {buildNavItems(handleNavigateTo)}
          </Navbar.Dropdown>
        </Navbar.Item>
      </Navbar.Container>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <a className=" button" 
                data-social-network="Linkedin" 
                data-social-target="https://www.linkedin.com/in/albertoalonsog/" 
                target="_blank"  
                rel="noreferrer"
                href="https://www.linkedin.com/in/albertoalonsog/"
              >
                <span className="icon">
                  <i className="fa fa-linkedin"></i>
                </span>
                <span>
                  Linkedin
                </span>
              </a>
            </p>
            <p className="control">
              <a className="button" href="http://github.com/a-alonso" target="_blank" rel="noreferrer">
                <span className="icon">
                  <i className="fa fa-github"></i>
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

Nav.Wrapper = ({ children }) => {
  return <>
    <Nav />
    {children}
  </>
}

export default Nav