import React from "react";
import { IconProps } from "../iconInterfaces";

const IconBadge = ({ size = 16 }: IconProps) => {
    const viewBox = `0 0 ${size} ${size}`

    const svg = <svg width="{size}" height="{size}" viewBox="{viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.4741 6.64706H2.97297C2.43561 6.64706 2 7.08268 2 7.62004V9.95644C2 10.4938 2.43561 10.9294 2.97297 10.9294H11.4741C12.0115 10.9294 12.4471 10.4938 12.4471 9.95644V7.62004C12.4471 7.08268 12.0115 6.64706 11.4741 6.64706Z" fill="#2A2F39"/>
    <path d="M12.3529 5H12.3529C11.4432 5 10.7058 5.73741 10.7058 6.64706V6.64707C10.7058 7.55672 11.4432 8.29413 12.3529 8.29413H12.3529C13.2625 8.29413 13.9999 7.55672 13.9999 6.64707V6.64706C13.9999 5.73741 13.2625 5 12.3529 5Z" fill="#D5DFEB"/>
    </svg>
    ;

    return svg
};

export default IconBadge;