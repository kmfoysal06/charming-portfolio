import SocialIcons from './social_icons';

const Intro = ({ portfolio, specialTag }) => {

  const short_description = specialTag(portfolio.short_description);

  return (
    <>
      <section className="min-h-screen min-h-lvh grid items-center mb-2">
        <div className="grid grid-cols-1 text-center lg:text-justify lg:grid-cols-2 lg:grid-flow-col-reverse cp-p4 intro cp-mt5" tabIndex="0">
          <div className="CHARMING_PORTFOLIO_primary-image-container">
            <img src={portfolio.user_image} className="lg:max-w-sm rounded-lg shadow-2xl block cp-m-auto sm:w-4/5" />
            <img src={portfolio.user_image} className="lg:max-w-sm rounded-lg shadow-2xl m-auto sm:w-4/5 " />
          </div>
          <div className="intro-primary-info">
            <h3 className="text-3xl font-bold mt-6 lg:mt-0">Hi, I'm {portfolio.name} <span className="d-contents CHARMING_PORTFOLIO-welcome-emoji">👋</span></h3>
            {short_description && (
              <p className="py-4" dangerouslySetInnerHTML={{ __html: short_description }} />
            )}
            <br />
            <p><span className="dashicons dashicons-location-alt mr-3"></span>{portfolio.address}</p>
            <p><span className="mr-3"><i className={portfolio.available ? "simplecharm-portfolio-available" : "simplecharm-portfolio-available-false"}></i></span>
              {portfolio.available ? "Available for New Projects" : "Currently Not Available for New Projects"}
            </p>
            <br />
            <div className="social-link cp-gap3 cp-my2">
                <SocialIcons icons={portfolio.social_links} />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Intro;



