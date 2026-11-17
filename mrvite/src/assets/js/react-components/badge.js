import { __ } from "@wordpress/i18n";

const Badge = ({badgeTitle}) => (
    <div className="badge badge-neutral cp-py3 cp-px4">
        {__(badgeTitle, "charming-portfolio")}
    </div>
);

export default Badge;
