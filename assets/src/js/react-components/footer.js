import { __ } from "@wordpress/i18n";
import SocialIcons from "./social_icons";
import CopyBtn from "./copy-btn";
import { useRef } from "@wordpress/element";
import ScrollAnimate from "./hooks/scroll-animation";

const Footer = ({ portfolio }) => {
    const thisDivs = useRef([]);
    ScrollAnimate(thisDivs);

    return (
        <section className="home-footer cp-py3 cp-mt2">
            <footer
                role="contentinfo"
                className="charming-portfolio-footer footer-inner cp-gap3"
            >
                <div className="badge badge-neutral m-auto py-3 px-4 mb-6 simrev-up-delay" ref={(el) => el && thisDivs.current.push(el)} style={{ "--delay": "20ms" }}>
                    {__("Get in Touch", "charming-portfolio")}
                </div>

                <div className="footer-text simrev-up-delay" ref={(el) => el && thisDivs.current.push(el)} style={{ "--delay": "40ms" }}>
                    <p>
                        {__(
                            "What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.",
                            "charming-portfolio",
                        )}
                    </p>
                </div>
                <div className="footer-mail cp-gapx3 simrev-up-delay" ref={(el) => el && thisDivs.current.push(el)} style={{ "--delay": "60ms" }}>
                    <span className="dashicons dashicons-email"></span>
                    <h2 className="text-lg md:text-xl lg:text-xl line-break-anywhere">
                        {portfolio.email}
                    </h2>
                    <CopyBtn
                        className="simplecharm-portfolio-copy-mail simplecharm-portfolio-button-hover"
                        content={portfolio.email}
                    />
                </div>

                <div className="footer-phone cp-gapx3 simrev-up-delay" ref={(el) => el && thisDivs.current.push(el)} style={{ "--delay": "80ms" }}>
                    <span className="dashicons dashicons-smartphone"></span>
                    <h2 className="text-lg md:text-xl lg:text-xl line-break-anywhere">
                        {portfolio.phone}
                    </h2>
                    <CopyBtn
                        className="simplecharm-portfolio-copy-phone simplecharm-portfolio-button-hover"
                        content={portfolio.phone}
                    />

                </div>
                <div className="footer-social-links simrev-up-delay" ref={(el) => el && thisDivs.current.push(el)} style={{ "--delay": "100ms" }}>
                    <p>
                        {__("You may also find me on these platforms!", "charming-portfolio")}
                    </p>
                    <div className="social-link justify-center cp-gap3 cp-my2">
                        <SocialIcons icons={portfolio.social_links} thisDivs={thisDivs} />
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer;
