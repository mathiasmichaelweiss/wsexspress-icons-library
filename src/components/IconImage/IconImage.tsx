import React from "react";
import { IconProps } from "../iconInterfaces";

const IconImage = ({ size = 16 }: IconProps) => {
    const viewBox = `0 0 ${size} ${size}`

    const svg = <svg width={size} height={size} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.44 3C2.64471 3 2 3.60986 2 4.36216V11.6378C2 12.3902 2.64471 13 3.44 13H12.56C13.3553 13 14 12.3902 14 11.6378V4.36216C14 3.60986 13.3553 3 12.56 3H3.44ZM4.64286 4.35136C3.97223 4.35136 3.42858 4.86562 3.42858 5.5C3.42858 6.13439 3.97223 6.64865 4.64286 6.64865C5.31349 6.64865 5.85715 6.13439 5.85715 5.5C5.85715 4.86562 5.31349 4.35136 4.64286 4.35136Z" fill="#D5DFEB"/>
    <path d="M3.08206 10.7316C3.24751 10.9664 3.40111 10.9664 3.64927 10.9664C3.89744 10.9664 11.6611 11 11.6611 11C11.6611 11 11.9093 10.8658 11.9801 10.6309C12.051 10.396 11.9093 10.1611 11.9093 10.1611L9.0732 6.2349C9.0732 6.2349 8.96686 6 8.68322 6C8.39964 6 8.2224 6.2349 8.2224 6.2349L6.16626 9.05368L5.4218 8.21476C5.4218 8.21476 5.31545 8.08054 5.13819 8.08054C4.96094 8.08054 4.81914 8.21476 4.81914 8.21476C4.81914 8.21476 3.11752 10.094 3.08206 10.1611C3.04661 10.2282 2.91662 10.4966 3.08206 10.7316Z" fill="#8894A5"/>
    </svg>      
    ;

    return svg
};

export default IconImage;