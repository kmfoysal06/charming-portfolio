import { __ } from '@wordpress/i18n';

const Skills = ({skills}) => {
  return (
    <section className="skills min-h-max p-6 my-2 flex flex-col">
      {skills && Object.keys(skills).length > 0 ? (
        <>
          <div className="skills-title flex flex-col items-center">
            <div className="badge badge-neutral py-3 px-4">{__("Skills", "charming-portfolio")}</div>
            <p>{__("The skills, tools and technologies I am really good at:", "charming-portfolio")}</p>
          </div>
          <div className="skills-container">
            {Object.keys(skills).map((skillKey, index) => {
              const skill = skills[skillKey];
              return (
                <div
                  key={skillKey || index}
                  className="charming-portfolio-skill-card charming_portfolio_shadow_thin cursor-pointer"
                  tabIndex="0"
                >
                  <img src={skill.image} alt={skill.name} className="charming-portfolio-single-skill" width="70" />
                  <p className="skill-name">{skill.name}</p>
                  <div className="simplecharm-skill-card-blank"></div>
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </section>
  );
}


export default Skills;
