import { useNavigate } from "react-router"
import Card from "../../components/Card"
import Nav from "../../components/Navbar"
import data from "../../core/app-data"
import { groupBy } from "../../core/utils"

const Hero = () => <section id="about" className="hero is-light is-bold">
        <Nav />
    <div className="hero-body">
        <div className="container">
            <div className="columns is-desktop">
                <div className="column is-three-quarters">
                    <article className="media">
                        <figure className="media-left">
                            <p className="image is-70x70">
                                <img className="avatar" src="assets/img/avatar.png" alt="alberto"/>
                            </p>
                        </figure>
                        <div className="media-content">
                            <h1 className="title">Alberto Alonso</h1>
                            <h2 className="subtitle">User Experience Researcher & Product Manager ready for challenges</h2>
                        </div>
                    </article>
                    <p>
                        <br/>
                        Nine years experienced innovation professional passionate for levering products/services driving data and user-centred design.
                        <br/>
                        Trained and graduated in digital innovation, design thinking and data analytics, I have worked as Product Manager, 
                        UX Researcher, Service Designer and a bit of development too.
                        <br/>
                        <br/>
                        Find here Digital Transformation cases (planning, testing, deploying and measuring) in fintech such as 
                        <b> JP Morgan Chase </b> 
                        in the United States, besides other industries such as services and retail.					
                        <br/>
                        Over the last years, I have worked on several projects, among them in: Automation, Machine Learning,  
                        Internet of Things, Payments. With companies such as JP Morgan Chase, Wyndham Rentals, Rappi, Samsung 
                        and Intel in different countries.
                        Besides, I received mentorship at <b>Y Combinator</b>.
                        <br/>
                        <br/>
                        Certified in {` `}
                        <a href="https://www.credential.net/91399918-b66d-4cc8-8b51-da8528806d29" target="_blank" rel="noreferrer">
                            <span className='has-text-weight-semibold' style={{ color: "#CD4D2D"}}>
                                Data analysis with Python & SQL
                            </span>
                        </a>
                        <br/>
                        Digital Innovation Graduate Diploma @LSE (London School of Economics and Political Science) 2020.
                        <br/>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>


const renderCards = (onSelect) => {
    const projectCards = data.projects
        .filter(p => p.card.display)
        .sort((pa,pb) => pa.card.order - pb.card.order)
        .map(p => {
            const { props } = p.card
            return <Card
                key={`${p.id}-card`}
                {...props}
                onSelect={() => onSelect(p.path ?? p.id)}
            />
        })
    
    return groupBy(2, projectCards).map((group, idx) => {
        return <div key={`card-group-${idx}`} className="columns is-desktop">
            {group}
        </div>
    })

}

const Work = () => {
    const navigate = useNavigate()

    const handleSelect = (to) => {
        navigate(`/project/${to}`)
    }

    return <section  id="Work" className="section section-2">
        <div className="container">
            <div className="has-text-centered">
                <h2 className="title is-2">Work</h2>
            </div>
            {renderCards(handleSelect)}
        </div>
    </section>
}

const Home = () => {
    return <>
        <Hero />
        <Work />
    </>
}

export default Home