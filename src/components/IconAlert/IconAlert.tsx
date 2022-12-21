import React from "react";
import { IconProps } from "../iconInterfaces";

const IconAlert = ({ size = 16 }: IconProps) => {
    const viewBox = `0 0 ${size} ${size}`

    const svg = <svg width={size} height={size} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0506 6.08809L7.07123 11.5884C6.81344 12.0643 7.15803 12.6429 7.69929 12.6429H13.6579C14.1992 12.6429 14.5438 12.0643 14.286 11.5884L11.3067 6.08809C11.0365 5.58931 10.3207 5.58931 10.0506 6.08809ZM10.6786 7.89287C10.8167 7.89287 10.9286 8.0048 10.9286 8.14287V9.75001C10.9286 9.88808 10.8167 10 10.6786 10C10.5405 10 10.4286 9.88808 10.4286 9.75001V8.14287C10.4286 8.0048 10.5405 7.89287 10.6786 7.89287ZM10.6785 10.7143C10.8561 10.7143 11 10.8582 11 11.0357C11 11.2132 10.8561 11.3571 10.6785 11.3571C10.501 11.3571 10.3571 11.2132 10.3571 11.0357C10.3571 10.8582 10.501 10.7143 10.6785 10.7143Z" fill="#2A2F39"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.42857 3C2.63959 3 2 3.63959 2 4.42857V10.5714C2 11.3604 2.63959 12 3.42857 12H6.2706C6.25766 11.7513 6.31057 11.4929 6.44315 11.2481L9.4225 5.74788C9.75179 5.13992 10.4121 4.90249 11 5.03556V4.42857C11 3.63959 10.3604 3 9.57143 3H3.42857ZM3.60712 4.67857C3.74519 4.67857 3.85712 4.7905 3.85712 4.92857V7.5C3.85712 7.63807 3.74519 7.75 3.60712 7.75C3.46905 7.75 3.35712 7.63807 3.35712 7.5V4.92857C3.35712 4.7905 3.46905 4.67857 3.60712 4.67857ZM5.46429 4.92857C5.46429 4.7905 5.35237 4.67857 5.21429 4.67857C5.07622 4.67857 4.96429 4.7905 4.96429 4.92857V7.5C4.96429 7.63807 5.07622 7.75 5.21429 7.75C5.35237 7.75 5.46429 7.63807 5.46429 7.5V4.92857Z" fill="#8692A2"/>
    </svg>
    ;

    return svg
};

export default IconAlert;