import React from "react";
import { IconProps } from "../iconInterfaces";

const IconPagination = ({ size = 16 }: IconProps) => {
    const viewBox = `0 0 ${size} ${size}`

    const svg = <svg width={size} height={size} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.55553 8.33333C5.55553 7.84241 5.95348 7.44444 6.44442 7.44444C6.93535 7.44444 7.33331 7.84241 7.33331 8.33333C7.33331 8.82425 6.93535 9.22222 6.44442 9.22222C5.95348 9.22222 5.55553 8.82425 5.55553 8.33333ZM6.44442 7C5.70804 7 5.11108 7.59696 5.11108 8.33333C5.11108 9.06971 5.70804 9.66667 6.44442 9.66667C7.18082 9.66667 7.77775 9.06971 7.77775 8.33333C7.77775 7.59696 7.18082 7 6.44442 7Z" fill="#8692A2"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66661 8.33333C8.66661 7.84241 9.06457 7.44444 9.5555 7.44444C10.0464 7.44444 10.4444 7.84241 10.4444 8.33333C10.4444 8.82425 10.0464 9.22222 9.5555 9.22222C9.06457 9.22222 8.66661 8.82425 8.66661 8.33333ZM9.5555 7C8.8191 7 8.22217 7.59696 8.22217 8.33333C8.22217 9.06971 8.8191 9.66667 9.5555 9.66667C10.2919 9.66667 10.8888 9.06971 10.8888 8.33333C10.8888 7.59696 10.2919 7 9.5555 7Z" fill="#D5DFEB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7778 8.33333C11.7778 7.84241 12.1758 7.44444 12.6667 7.44444C13.1576 7.44444 13.5556 7.84241 13.5556 8.33333C13.5556 8.82425 13.1576 9.22222 12.6667 9.22222C12.1758 9.22222 11.7778 8.82425 11.7778 8.33333ZM12.6667 7C11.9303 7 11.3334 7.59696 11.3334 8.33333C11.3334 9.06971 11.9303 9.66667 12.6667 9.66667C13.4031 9.66667 14 9.06971 14 8.33333C14 7.59696 13.4031 7 12.6667 7Z" fill="#D5DFEB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33333 7C4.06972 7 4.66667 7.59696 4.66667 8.33333C4.66667 9.06971 4.06972 9.66667 3.33333 9.66667C2.59695 9.66667 2 9.06971 2 8.33333C2 7.59696 2.59695 7 3.33333 7Z" fill="#2A2F39"/>
    </svg>        
    ;

    return svg
};

export default IconPagination;