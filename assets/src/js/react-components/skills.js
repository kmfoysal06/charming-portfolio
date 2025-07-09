import { __ } from "@wordpress/i18n";
import ScrollAnimate from "./hooks/scroll-animation";
import { useRef } from "@wordpress/element";
import Badge from "./badge";

const Skill = ({ skill, id, refDivs}) => (
    <div
        className="charming-portfolio-skill-card charming_portfolio_shadow_thin cursor-pointer simrev-up-delay"
        tabIndex="0"
        ref={(el) => el && refDivs.current.push(el)}
        style={{ "--delay": `${(id + 3) * 50}ms` }}
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
                        className="section-title simrev-up-delay"
                        ref={(el) => el && thisDivs.current.push(el)}
                        style={{ "--delay": "20ms" }}
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
                        className="skills-container simrev-up-delay"
                        ref={(el) => el && thisDivs.current.push(el)}
                        style={{ "--delay": "70ms" }}
                    >
                        {Object.keys(skills).map((skillKey, index) => {
                            const skill = skills[skillKey];
                            return <Skill key={skillKey || index} skill={skill} id={index} refDivs={thisDivs} />;
                        })}
                    </div>
                </>
            ) : null}
        </section>
    );
};

export default Skills;
