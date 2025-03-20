import { __ } from '@wordpress/i18n';

const Skills = () => {
	return (
		<section className="skills min-h-max p-6 my-2 flex flex-col">
			{portfolio_data.skills && Object.keys(portfolio_data.skills).length > 0 ? (
				<>
					<div className="skills-title flex flex-col items-center">
						<div className="badge badge-neutral py-3 px-4">{__("Skills", "charming-portfolio")}</div>
						<p>{__("The skills, tools and technologies I am really good at:", "charming-portfolio")}</p>
					</div>
					<div className="skills-container">
						{Object.keys(portfolio_data.skills).map((skillKey, index) => {
							const skill = portfolio_data.skills[skillKey];
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
