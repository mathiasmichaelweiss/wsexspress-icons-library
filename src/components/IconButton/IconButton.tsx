import React from "react";
import { IconProps } from "../iconInterfaces";

const IconButton = ({ size = 16 }: IconProps) => {
    const viewBox = `0 0 ${size} ${size}`

    const svg = <svg width="{size}" height="{size}" viewBox="{viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.15827 7.07061C6.3142 7.18756 6.34583 7.40879 6.22886 7.56473L5.4588 8.59146C5.34185 8.7474 5.12062 8.77901 4.96468 8.66205C4.80874 8.5451 4.77714 8.32387 4.8941 8.16794L5.66416 7.1412C5.78112 6.98526 6.00235 6.95365 6.15827 7.07061Z" fill="#2A2F39"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7465 7.07061C10.9025 7.18756 10.9341 7.40879 10.8171 7.56473L10.0471 8.59146C9.93011 8.7474 9.70888 8.77901 9.55295 8.66205C9.39699 8.5451 9.3654 8.32387 9.48236 8.16794L10.2524 7.1412C10.3694 6.98526 10.5906 6.95365 10.7465 7.07061Z" fill="#2A2F39"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 7.70588C2 7.51096 2.15803 7.35294 2.35294 7.35294H4.2139C4.40885 7.35294 4.56684 7.51096 4.56684 7.70588V8.02674C4.56684 8.22166 4.40885 8.37968 4.2139 8.37968H2.35294C2.15803 8.37968 2 8.22166 2 8.02674V7.70588Z" fill="#2A2F39"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.80215 7.35294H6.9412C6.7463 7.35294 6.58826 7.51096 6.58826 7.70588V8.02674C6.58826 8.22166 6.7463 8.37968 6.9412 8.37968H8.80215C8.99712 8.37968 9.15509 8.22166 9.15509 8.02674V7.70588C9.15509 7.51096 8.99712 7.35294 8.80215 7.35294Z" fill="#8692A2"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7433 8.02674V7.70588C13.7433 7.51096 13.5854 7.35294 13.3904 7.35294H11.5295C11.3346 7.35294 11.1765 7.51096 11.1765 7.70588V8.02674C11.1765 8.22166 11.3346 8.37968 11.5295 8.37968H13.3904C13.5854 8.37968 13.7433 8.22166 13.7433 8.02674Z" fill="#D5DFEB"/>
    </svg>    
    ;

    return svg
};

export default IconButton;