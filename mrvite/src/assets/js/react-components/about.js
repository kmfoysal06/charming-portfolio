import { __ } from "@wordpress/i18n";
import { useRef } from "@wordpress/element";
import ScrollAnimate from "./hooks/scroll-animation";
import Badge from "./badge";

const About = ({ specialTag, portfolio }) => {
  const description = specialTag(portfolio.description);

  // animate on scroll
  const thisDivs = useRef([]);
  ScrollAnimate(thisDivs);
  return (
    <>
      <section className="about-me min-h-screen min-h-max cp-my2 flex justify-center charming-portfolio-container-w">
        <div className="flex flex-col" tabIndex="0">
          <div
            className="section-title simrev-up-delay"
            style={{ "--delay": "20ms" }}
            ref={(el) => el && thisDivs.current.push(el)}
          >
            <Badge badgeTitle={"About Me"} />
           
          </div>
          <div className="aboutme hero-content sm:flex-col md:flex-row lg:flex-row  sm:justify-between md:justify-between lg:justify-between">
            <img
              src={portfolio.user_image2}
              className="w-full rounded-lg simrev-up-delay"
              style={{ "--delay": "50ms" }}
            alt={portfolio.name}
              ref={(el) => el && thisDivs.current.push(el)}
            />
            <div
              className="simrev-up-delay"
              style={{ "--delay": "80ms" }}
              ref={(el) => el && thisDivs.current.push(el)}
            >
            <h3>
              {__("Curious about me? Here you have it:", "charming-portfolio")}
            </h3>

              {description && (
                <p
                  className="py-3"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
