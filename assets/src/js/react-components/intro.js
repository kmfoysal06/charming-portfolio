import SocialIcons from "./social_icons";
import ScrollAnimate from "./hooks/scroll-animation";
import { useRef } from "@wordpress/element";

const Intro = ({ portfolio, specialTag }) => {
  const thisDivs = useRef([]);
    ScrollAnimate(thisDivs);

  const short_description = specialTag(portfolio.short_description);

  return (
    <>
      <section className="min-h-screen min-h-lvh grid items-center mb-2">
        <div
          className="grid grid-cols-1 text-center lg:text-justify lg:grid-cols-2 lg:grid-flow-col-reverse cp-p4 intro cp-mt5"
          tabIndex="0"
        >
          <div className="CHARMING_PORTFOLIO_primary-image-container">
            <img
              src={portfolio.user_image}
              className="lg:max-w-sm rounded-lg shadow-2xl block cp-m-auto sm:w-4/5 simrev-up"
              alt={portfolio.name}
              ref={(el) => el && thisDivs.current.push(el)}
            />
          </div>
          <div className="intro-primary-info">
            <h3 className="text-3xl font-bold mt-6 lg:mt-0 simrev-up-delay" ref={(el) => el && thisDivs.current.push(el)} style={{ "--delay": "20ms" }}>
              Hi, I'm {portfolio.name}{" "}
              <span className="d-contents CHARMING_PORTFOLIO-welcome-emoji">
                👋
              </span>
            </h3>
            {short_description && (
              <p
                className="py-4 simrev-up-delay"
                dangerouslySetInnerHTML={{ __html: short_description }}
                ref={(el) => el && thisDivs.current.push(el)}
                style={{ "--delay": "50ms" }}
              />
            )}
            <br />
            <div>
              <p className="simrev-up-delay" ref={(el) => el && thisDivs.current.push(el)} style={{ "--delay": "80ms" }}>
                <span className="dashicons dashicons-location-alt mr-3"></span>
                {portfolio.address}
              </p>
              <p className="simrev-up-delay" ref={(el) => el && thisDivs.current.push(el)} style={{ "--delay": "110ms" }}>
                <span className="mr-3">
                  <i
                    className={
                      portfolio.available
                        ? "simplecharm-portfolio-available"
                        : "simplecharm-portfolio-available-false"
                    }
                  ></i>
                </span>
                {portfolio.available
                  ? "Available for New Projects"
                  : "Currently Not Available for New Projects"}
              </p>
            </div>
            <br />
            <div className="social-link justify-center-sm justify-start cp-gap3 cp-my2">
              <SocialIcons icons={portfolio.social_links} thisDivs={thisDivs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
