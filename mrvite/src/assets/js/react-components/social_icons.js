import GithubIcon from "./icons/github";
import LeetCodeIcon from "./icons/leetcode";

const SocialIcon = ({ iconName, url}) => {
  /**
   * All Icons Available in Dashicons
   */
  const dashIconsIcons = [
    "twitter",
    "facebook",
    "instagram",
    "youtube",
    "linkedin",
    "pinterest",
    "podio",
    "google",
    "reddit",
    "wordpress",
    "rss",
    "whatsapp",
    "xing",
    "twitch",
  ];
  /**
   * All Svg Icon Hosted in Icons/ Directory
   */
  const DashIconsIcon = ({ name, url}) => {
    return (
      <a
        className="simplecharm-portfolio-button-hover"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${name} link`}
      >
        <span className={`dashicons dashicons-${name}`}></span>
      </a>
    );
  };

  const DefaultIcon = ({ url}) => {
    /**
     * Default Svg Icon if None(dashicons or icons from svgs) Available
     */
    return (
      <a
        className="simplecharm-portfolio-button-hover"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open Link ${url}`}
      >
        <span className="dashicons dashicons-admin-links"></span>
      </a>
    );
  };

  const svgIcons = {
    github: <GithubIcon url={url} />,
    leetcode: <LeetCodeIcon url={url} />,
  };
  return (
    <>
      {dashIconsIcons.includes(iconName) ? (
        <DashIconsIcon name={iconName} url={url} />
      ) : (
        svgIcons[iconName] || <DefaultIcon url={url} />
      )}
    </>
  );
};

const SocialIcons = ({ icons, thisDivs}) => {
  return (
    <>
      {Object.keys(icons).map((id, i) => (
        <div className="simrev-up-delay" ref={(el) => el && thisDivs.current.push(el)} style={{ "--delay": `${i * 30}ms` }} key={id}>
            <SocialIcon
              iconName={icons[id].name.toLowerCase()}
              url={icons[id].url}
              key={id} />
        </div>
      ))}
    </>
  );
};
export default SocialIcons;
