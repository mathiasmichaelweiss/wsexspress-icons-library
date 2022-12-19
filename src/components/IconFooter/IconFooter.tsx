import React from "react";
import { IconProps } from "../iconInterfaces";

const IconFooter = ({ size = 16 }: IconProps) => {
    const viewBox = `0 0 ${size} ${size}`

    const svg = <svg width="{size}" height="{size}" viewBox="{viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.05353 11H8V13H2.15718C0.631546 13 1.05353 11 1.05353 11Z" fill="#2A2F39"/>
    <path d="M14.9465 11H8V13H13.8428C15.3685 13 14.9465 11 14.9465 11Z" fill="#2A2F39"/>
    <path d="M2 10H3.46428V4.36667H8V3H3.46428C3.46428 3 2.85714 3 2.42857 3.4C2 3.8 2 4.36667 2 4.36667V10Z" fill="#2A2F39"/>
    <path d="M14 10H12.6333V4.36667H8V3H12.6333C12.6333 3 13.2 3 13.6 3.4C14 3.8 14 4.36667 14 4.36667V10Z" fill="#2A2F39"/>
    <path d="M12 8H4V10H12V8Z" fill="#D5DFEB"/>
    </svg>      
    ;

    return svg
};

export default IconFooter;