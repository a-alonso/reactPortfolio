import Nav from "../../components/Navbar"

const Home = () => {
    return <section id="about" class="hero is-light is-bold">
        <Nav />
    <div class="hero-body">
    <div class="container">
        <div class="columns is-desktop">
            <div class="column is-three-quarters">
                <article class="media">
                    <figure class="media-left">
                        <p class="image is-70x70">
                            <img class="avatar" src="assets/img/avatar.png" alt="alberto"/>
                        </p>
                    </figure>
                    <div class="media-content">
                        <h1 class="title">Alberto Alonso</h1>
                        <h2 class="subtitle">User Experience Researcher & Product Manager ready for challenges</h2>
                    </div>
                </article>
                <p class="">
                    <br/>
                    Nine years experienced innovation professional passionate for levering products/services driving data and user-centred design.
                    <br/>
                    Trained and graduated in digital innovation, design thinking and data analytics, I have worked as Product Manager, UX Researcher, Service Designer and a bit of development too.
                    
                    <br/><br/>
                    Find here Digital Transformation cases (planning, testing, deploying and measuring) in fintech such as <b> JP Morgan Chase </b> in the United States, besides other industries such as services and retail.					
                    <br/>
                    Over the last years, I have worked on several projects, among them in: Automation, Machine Learning,  Internet of Things, Payments. With companies such as JP Morgan Chase, Wyndham Rentals, Rappi, Samsung and Intel in different countries.
                    Besides, I received mentorship at <b>Y Combinator</b>.

                    <br/><br/>
                    Certified in <a href="https://www.credential.net/91399918-b66d-4cc8-8b51-da8528806d29" target="_blank" rel="noreferrer">
                        <span class='has-text-weight-semibold' style={{ color: "#CD4D2D"}}>Data analysis with Python & SQL</span>
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
}

export default Home