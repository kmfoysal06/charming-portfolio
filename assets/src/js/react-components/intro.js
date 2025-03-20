
const Intro = () => {

  return (
    <>
      <section className="min-h-screen min-h-lvh grid items-center mb-2">
        <div className="grid grid-cols-1 text-center lg:text-justify lg:grid-cols-2 lg:grid-flow-col-reverse p-4 intro mt-5" tabIndex="0">
          <div className="CHARMING_PORTFOLIO_primary-image-container">
            <img src={portfolio_data.user_image} className="lg:max-w-sm rounded-lg shadow-2xl block m-auto sm:w-4/5" />
            <img src={portfolio_data.user_image} className="lg:max-w-sm rounded-lg shadow-2xl m-auto sm:w-4/5 " />
          </div>
          <div className="intro-primary-info">
            <h3 className="text-3xl font-bold mt-6 lg:mt-0">Hi, I'm {portfolio_data.name} <span className="d-contents CHARMING_PORTFOLIO-welcome-emoji">👋</span></h3>
            <p className="py-4">{portfolio_data.short_description}</p>
            <br />
            <p><span className="dashicons dashicons-location-alt mr-3"></span>{portfolio_data.address}</p>
            <p><span className="mr-3"><i className={portfolio_data.available ? "simplecharm-portfolio-available" : "simplecharm-portfolio-available-false"}></i></span>
              {portfolio_data.available ? "Available for New Projects" : "Currently Not Available for New Projects"}
            </p>        <br />
          </div>
        </div>
      </section>
    </>
  )
}

export default Intro;



