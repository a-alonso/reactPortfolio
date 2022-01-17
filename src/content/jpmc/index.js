const JPMorganContent = () => {
    return <>
        <section className="hero is-medium is-link is-bold">
		  <div className="hero-body">
		    <div className="container">
		      <h1 className="title">
		        JP Morgan Chase
		      </h1>
		      <h2 className="subtitle">
		        Merchant Services Documentation Portal
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
								<h2 className="title is-2">Public API Emulation</h2>
								<p className="subtitle is-5">Try endpoint live modules<br/></p>
								<div className="columns is-desktop is-centered">
									<div className="column is-centered is-half-desktop">
										<progress className="progress is-link" value="85" max="100">15%</progress>
										<p className ="has-text-centered is-size-5 has-text-weight-light has-text-grey">
											<span className="icon-text">
											  <span>DISCOVER</span>
											  <span className="icon">
											    <i className="fa fa-chevron-right"></i>
											  </span>
											  <span>DEFINE</span>
											  <span className="icon">
											    <i className="fa fa-chevron-right"></i>
											  </span>
											  <span>DEVELOP</span>
											  <span className="icon">
											    <i className="fa fa-chevron-right"></i>
											  </span>
											  <span>DELIVER</span>
											</span>
										</p>
									</div>
								</div>
								<p className=''><span className='subtitle is-5'>The problem -</span>
									JP Morgan Chase offers their merchant customers, several digital services for treasury, payment gateway, fraud protection, etc. Each solution had their documentation on .pdf files on different websites requiring authentication.
									<br/><br/>
									What if JP Morgan had a single portal for all documentation accessible, searchable in search engines and able to try their technology?
								</p>
								<p className=''><span className='subtitle is-5'>The solution -</span>
										Public <i>try endpoint</i> and copy code samples feature for developers exploring and maintaining JP Morgan solutions and integrations.
									<br/>
								</p>
								<p className=''><span className='subtitle is-5'>The approach -</span>
									Brining concepts from analog industries to loans and adapting them to the repayments business context.
									<br/>
								</p>
								
								<p className="subtitle is-3">Tools used<br/></p>
								
								<div className="columns is-desktop is-vcentered">
									
									
									<div className="column ">
										<div className = "tile is-ancestor">
											<div className="tile is-parent">
												<article className="tile is-child notification is-warning">
													<p className="title is-info">
														<span className="icon is-large">
															<i className="fa fa-clipboard fa-stack-1x"></i>
														</span>
													</p>
													<p className="subtitle bd-notification is-primary has-text-centered">
														In context Interview
													</p>
												</article>
											</div>
											<div className="tile is-parent">
												<article className="tile is-child notification is-info">
													<p className="title is-info">
														<span className="icon is-large">
															<i className="fa fa-map fa-stack-1x"></i>
														</span>
													</p>
													<p className="subtitle bd-notification is-primary has-text-centered">
														Journey Map
													</p>
												</article>	
											</div>
											<div className="tile is-parent">
												<article className="tile is-child notification is-danger">
													<p className="title is-info">
														<span className="icon is-large">
															<i className="fa fa-user fa-stack-1x"></i>
														</span>
													</p>
													<p className="subtitle bd-notification is-primary has-text-centered">
														User Persona
													</p>
												</article>	
											</div>
										</div>		
									</div>
								</div>
								<p className="subtitle is-3">Insights<br/></p>
									Three user personas were found; new, current developer and technical writer.
									Find a sample of one of the user journeys below:
								<iframe src="https://endava.invisionapp.com/console/share/KY248OQ08R/525509594" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
								<p className="subtitle is-3"> 
									<br /> Deliverables<br/></p>
								<p className=''>Owned the backlog, prototypes, charts for models.
									<br/>
								Check the first live launch here
									<strong><a href="https://developer.merchant.jpmorgan.com/content/jpm-cp/msdeveloperportal/us/en/developers/api-explorer/overview/#/4.0.0/POST/gwapi/v4/gateway/payments/" target="_blank"> HERE</a></strong>
								</p>
								<div className="columns is-desktop">
									<div className="column is-12">
											<figure className="image is-350x150">
												<img src="assets/img/jpmc_liveVersion.png" alt="apiXplorer"/>
											</figure>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
}

export default JPMorganContent