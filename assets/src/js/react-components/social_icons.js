import GithubIcon from './icons/github';


const SocialIcon = ({ iconName, url }) => {
  /**
   * All Icons Available in Dashicons
   */
  const dashIconsIcons = [
    'twitter',
    'facebook',
    'instagram',
    'youtube',
    'linkedin',
    'pinterest',
    'podio',
    'google',
    'reddit',
    'wordpress',
    'rss',
    'whatsapp',
    'xing',
    'twitch',
  ];
  /**
   * All Svg Icon Hosted in Icons/ Directory
   */

  const svgIcons = {
    'github': <GithubIcon url={url} />,
  }
  return (
    <>
      {dashIconsIcons.includes(iconName) ? (
        <a className="simplecharm-portfolio-button-hover" href={url} target="_blank" rel="noopener noreferrer">
          <span className={`dashicons dashicons-${iconName}`}></span>
        </a>
      ) : (
        svgIcons[iconName] || (
          <a className="simplecharm-portfolio-button-hover" href={url} target="_blank" rel="noopener noreferrer">
            <span className="dashicons dashicons-admin-links"></span>
          </a>
        )
      )}
    </>
  );
}

const SocialIcons = ({ icons }) => {
  return (
    <>
      {
        Object.keys(icons).map((id, i) => (
          <SocialIcon iconName={icons[id].name.toLowerCase()} url={icons[id].url} key={id} />
        )
        )
      }

    </>
  )
}
export default SocialIcons;
