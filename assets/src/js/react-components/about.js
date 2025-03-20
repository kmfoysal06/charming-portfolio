import { __ } from '@wordpress/i18n';

const About = () => {
  return (
    <>
      <section className="about-me min-h-screen min-h-max my-2 flex justify-center">
        <div className="flex flex-col" tabIndex="0">
          <div className="aboutme-title my-3 flex flex-col items-center">
            <div className="badge badge-neutral py-3 px-4">{__("About Me", "charming-portfolio")}</div>
            <h3 className="text-xl">{__("Curious about me? Here you have it:", "charming-portfolio")}</h3>
          </div>
          <div className="aboutme hero-content sm:flex-col md:flex-row lg:flex-row  sm:justify-between md:justify-between lg:justify-between">
            <img src={portfolio_data.user_image2} className="sm:w-full md:w-2/4 lg:w-2/4 rounded-lg shadow-2xl" />
            <div>
              <p className="py-6">
                {portfolio_data.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
