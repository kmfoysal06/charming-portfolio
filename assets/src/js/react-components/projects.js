import { __ } from "@wordpress/i18n";
import ScrollAnimate from "./hooks/scroll-animation";
import { useRef } from "@wordpress/element";
import Badge from "./badge";

const Projects = ({ projects, specialTag, splitTags }) => {
    const hasProjects = projects && Object.keys(projects).length;

    if (!hasProjects) {
        return null;
    }

    const thisDivs = useRef([]);
    ScrollAnimate(thisDivs);

    return (
        <section className="projects min-h-max p-6 my-2 flex flex-col">
            <div className="section-title pop-in-animation" ref={(el) => el && thisDivs.current.push(el)}>

            <Badge badgeTitle={"Works"} />

                <p>
                    {__(
                        "Some of the noteworthy projects I have built:",
                        "charming-portfolio",
                    )}
                </p>
            </div>

            <div className="single-work-info grid lg:grid-cols-2 md:grid-cols-2 gap-x-4 my-3">
                {Object.keys(projects).map((id) =>
                    (projects[id].title && projects[id].description) && (
                        <div className="line-break-anywhere pop-in-animation" tabIndex="0" key={id} ref={(el) => el && thisDivs.current.push(el)}>
                            <div className="flex flex-col my-4 gap-y-3 p-6 pb-3 charming_portfolio_shadow_thin portfolio-project-bg">
                                <h2 className="text-2xl">{projects[id].title}</h2>
                                <p className="overflow-y-auto">
                                    {specialTag(projects[id].description)}
                                </p>

                                {projects[id].tags && splitTags(projects[id].tags)}

                                <div className="work-live-link">
                                    <a
                                        href={projects[id].link}
                                        target="_blank"
                                        className="charming_portfolio_shadow_thin"
                                        aria-label={`Open ${projects[id].link}`}
                                    >
                                        <span className="dashicons dashicons-external"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ),
                )}
            </div>
        </section>
    );
};

export default Projects;

//<?php printf(
//				wp_kses(
//					CHARMING_PORTFOLIO_split_tags(isset($work['tags']) ? $work['tags'] : ''),
//					[
//						'div' => [
//							'class' => []
//						]
//					]
//				)
//			);
//			?>
