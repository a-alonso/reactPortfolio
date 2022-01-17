const HogaruContent = () => {
    return <>
        <section className="hero is-info is-medium">
            <div className="hero-body">
            <div className="container">
                <h1 className="title">
                Hogaru.com
                </h1>
                <h2 className="subtitle">
                On Demand cleaning for SMEs and Homes
                </h2>
            </div>
            </div>
        </section>
        <section  id="Acquisition" className="section section-2">
            <div className="container">
                <div className="columns is-desktop is-centered">
                    <div className="column is-three-quarters is-narrow">
                        <div className="has-text-left">
                            <div className="content">
                                <h2 className="title is-2">Online Acquisition Experience</h2>
                                <p className="subtitle is-5">Client lead conversion expierience enhanced to acquire subscriptions instead of one-shot purchases <br /></p>
                                <p className=''><span className='subtitle is-5'>The problem -</span>
                                    Since Hogaru.com is a service, it's revenues rely on how many times a new client repurchase. The churn of new clients was above 42% augmenting dramatically the cost of effective acquisition.
                                </p>
                                <p className=''><span className='subtitle is-5'>The solution -</span>The acquisition and pricing experience was changed to a <strong>subscription model</strong> where the client had to give a trial to a month subscription rather than one cleaning.
                                    Despite of the amount of cleanings purchased, the price per cleaning was defined by the weekly frequency chosen by the client.
                                    <br />
                                    After 4 months of deploying this feature, 64% of the company revenues were stabilized by subscription clients.
                                </p>
                                <p className=''><span className='subtitle is-5'>The UX Approach -</span>The solution was conceived and refined by UX Research and prototyping using these qualitative and quantitative methods:
                                    <br />
                                </p>
                                <div className="columns is-desktop">
                                    <div className="column is-half">
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th colSpan='2'>1. User & Problem Research</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Recurrent client interviews</td>
                                                    <td>Churned client interviews and surveys</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th colSpan='2'>2. Scoping</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Quantitative - Retention comparisson between clietns that purchased several cleanings VS one cleaning on their first purchase</td>
                                                    <td>Qualitative - Benchmarking the actual 'subscription' services the test clients were using</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="column is-half">
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th colSpan='2'>3. Prototyping</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>A/B transactional e-mail hacking to provide a 'draft' booking for the client to confirm instead of waiting them to repurchase at the end of the month</td>
                                                    <td>Design Scenario tests</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th colSpan='2'>4. Deployment</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Userflow, features and email chaining</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <p className=''><span className='subtitle is-5'>The Deliverables -</span> Wireframes, UI specs, and User stories were handed to developers
                                    <br />
                                Check the wireframe in invision
                                    <strong><a href="http://invis.io/VHDZFQGRZ" target="_blank" rel="noreferrer"> HERE</a></strong>
                                    <br/>
                                Check the live version
                                    <strong><a href="https://itunes.apple.com/co/app/hogaru/id1045276996?mt=8" target="_blank" rel="noreferrer"> on iOS &nbsp; <i className="fa fa-apple" aria-hidden="true" ></i></a></strong> or
                                    <strong><a href="https://play.google.com/store/apps/details?id=com.hogaru.clientApp" target="_blank" rel="noreferrer"> Android &nbsp;<i className="fa fa-android" aria-hidden="true"></i></a></strong>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="ERP" className="section section-2">
            <div className="container">
                <div className="columns is-desktop is-centered">
                    <div className="column is-three-quarters is-narrow">
                        <div className="has-text-left">
                            <div className="content">
                                <h2 className="title is-2">Mobile ERP - Cleaners Operation Management</h2>
                                <p className="subtitle is-5">Bot developed to manage cleaners daily processes <br /></p>
                                <p className=''><span className='subtitle is-5'>The problem -</span> Company required a monthly 30% growth in its cleaners fleet, counting ~1200 cleaners by the end of 2017. Each cleaner on a succesful journey follows 4 mandatory steps per day:
                                </p>
                                    <ol>
                                        <li>Confirm attendance to cleaning on the next day</li>
                                        <li>Confirm they are commuting to calculate ETA</li>
                                        <li>Confirm to begin the cleaning</li>
                                        <li>Confirm to finish the cleaning</li>
                                    </ol>
                                    However, mostly newcomers and cleaners having new clients had several operations issues such as getting lost finding an address or questioning how to clean something properly.
                                    The daily amount of processes is up to 2,700 per day, making unsustainable to build up a support team of 1 operator per 20 cleaners.
                                <p></p>
                                <p className=''><span className='subtitle is-5'>The solution -</span>A mobile bot was embedded in their mobile app to simulate a chat with a virtual operator that replies immediatly to any requirement the cleaner has. Manual communication is held only when a situation requires attention
                                    <br />
                                    The virtual operator "Amanda" currently <strong> replies automatically to the 76% of conversations</strong> with cleaners and manages the daily operations with no hassle.
                                    A sandbox tool was deployed for the ops team to add or remove options the cleaners can choose when using the bot. Watch the news report about this ERP:
                                    <br />
                                </p>
                                <iframe title="youtubeHogaru" width="100%" height="315" src="https://www.youtube.com/embed/YeGhbdDIc9k?rel=0" frameBorder="0" allowFullScreen></iframe>
                                <p className=''><br /><span className='subtitle is-5'>The UX Approach -</span>The solution was conceived and refined by UX Research and prototyping using these qualitative and quantitative methods:
                                    <br />
                                </p>
                                <div className="columns is-desktop">
                                    <div className="column is-half">
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th colSpan='2'>1. User & Problem Research</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>User Shadowing</td>
                                                    <td>Task Analysis</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th colSpan='2'>2. Scoping</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Quantitative - Conversation scraping for identification of most common requests</td>
                                                    <td>Qualitative - Roleplay</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="column is-half">
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th colSpan='2'>3. Protoyping</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Wizard of Oz</td>
                                                    <td>Paper protoyping</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th colSpan='3'>4. Deployment</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Definition of service moments and touch points</td>
                                                    <td>Decision tree</td>
                                                    <td>UI components</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <p className=''><span className='subtitle is-5'>The Deliverables -</span> Wireframes (confidential), UI specs, User stories and the decision tree were handed to developers
                                    <br />
                                Wireframes and UI specs are confidential, however the decision tree can be checked here:
                                </p>
                                <iframe title="docsHogaru" src="https://docs.google.com/presentation/d/e/2PACX-1vQgavZ9SUdTe3cyK_dgPGrJf_fTBVVVnO6I2HxodJoNtx_Nje8QaoeMLArRNg3VM1f56Kt-vjhwjoa8/embed?start=false&loop=false&delayms=3000" frameBorder="0" width="100%" height="569" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </>
}

export default HogaruContent