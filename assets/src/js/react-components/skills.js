import { __ } from "@wordpress/i18n";
import ScrollAnimate from "./hooks/scroll-animation";
import { useRef } from "@wordpress/element";
import Badge from "./badge";

const Skill = ({ skill }) => (
    <div
        className="charming-portfolio-skill-card charming_portfolio_shadow_thin cursor-pointer"
        tabIndex="0"
    >
        <img
            src={skill.image}
            alt={skill.name}
            className="charming-portfolio-single-skill"
            width="70"
        />
        <p className="skill-name">{skill.name}</p>
        <div className="simplecharm-skill-card-blank"></div>
    </div>
);

const Skills = ({ skills }) => {
    const thisDivs = useRef([]);
    ScrollAnimate(thisDivs);
    return (
        <section className="skills min-h-max p-6 my-2 flex flex-col">
            {skills && Object.keys(skills).length > 0 ? (
                <>
                    <div
                        className="section-title pop-in-animation"
                        ref={(el) => el && thisDivs.current.push(el)}
                    >
                        <Badge badgeTitle={"Skills"} />
                        <p>
                            {__(
                                "The skills, tools and technologies I am really good at:",
                                "charming-portfolio",
                            )}
                        </p>
                    </div>
                    <div
                        className="skills-container pop-in-animation"
                        ref={(el) => el && thisDivs.current.push(el)}
                    >
                        {Object.keys(skills).map((skillKey, index) => {
                            const skill = skills[skillKey];
                            return <Skill key={skillKey || index} skill={skill} />;
                        })}
                    </div>
                </>
            ) : null}
        </section>
    );
};

export default Skills;
