import { __ } from "@wordpress/i18n";
import { useRef } from "@wordpress/element";
import ScrollAnimate from "./hooks/scroll-animation";

const About = ({ specialTag, portfolio }) => {
  const description = specialTag(portfolio.description);

  // animate on scroll
  const thisDivs = useRef([]);
  ScrollAnimate(thisDivs);
  return (
    <>
      <section className="about-me min-h-screen min-h-max cp-my2 flex justify-center">
        <div className="flex flex-col" tabIndex="0">
          <div
            className="section-title pop-in-animation"
            ref={(el) => el && thisDivs.current.push(el)}
          >
            <div className="badge badge-neutral cp-py3 cp-px4">
              {__("About Me", "charming-portfolio")}
            </div>
            <h3 className="text-xl">
              {__("Curious about me? Here you have it:", "charming-portfolio")}
            </h3>
          </div>
          <div className="aboutme hero-content sm:flex-col md:flex-row lg:flex-row  sm:justify-between md:justify-between lg:justify-between">
            <img
              src={portfolio.user_image2}
              className="sm:w-full md:w-2/4 lg:w-2/4 rounded-lg shadow-2xl pop-in-animation"
              ref={(el) => el && thisDivs.current.push(el)}
            />
            <div
              className="pop-in-animation"
              ref={(el) => el && thisDivs.current.push(el)}
            >
              {description && (
                <p
                  className="py-6"
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
