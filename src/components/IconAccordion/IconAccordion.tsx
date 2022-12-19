import React from "react";
import { IconProps } from "../iconInterfaces";

const IconAccordion = ({ size = 16 }: IconProps) => {
    const viewBox = `0 0 ${size} ${size}`

    const svg = <svg width="16" height="16" viewBox="{viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.08696 7.34784C3.48665 7.34784 3 7.83449 3 8.4348V11.9131C3 12.5134 3.48665 13 4.08696 13H11.913C12.5133 13 13 12.5134 13 11.9131V8.4348C13 7.83449 12.5133 7.34784 11.913 7.34784H4.08696ZM12.1304 12.1304H3.86957V8.2174H12.1304V12.1304Z" fill="#2A2F39"/>
    <path d="M7.3478 9.08694H4.30432V9.52173H7.3478V9.08694Z" fill="#D5DFEB"/>
    <path d="M8.65215 9.95651H4.30432V10.3913H8.65215V9.95651Z" fill="#B3B8BE"/>
    <path d="M7.78258 10.8261H4.30432V11.2609H7.78258V10.8261Z" fill="#D5DFEB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.08696 3C3.48665 3 3 3.48665 3 4.08696V5.82609C3 6.4264 3.48665 6.91304 4.08696 6.91304H11.913C12.5133 6.91304 13 6.4264 13 5.82609V4.08696C13 3.48665 12.5133 3 11.913 3H4.08696ZM12.1304 5.93478H3.86957V3.97826H12.1304V5.93478Z" fill="#2A2F39"/>
    <path d="M8.21736 4.73914H4.30432V5.17392H8.21736V4.73914Z" fill="#D5DFEB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2665 4.65592C10.3125 4.58699 10.4056 4.56837 10.4746 4.61432L11.0435 4.99363L11.6125 4.61432C11.6814 4.56837 11.7746 4.58699 11.8205 4.65592C11.8665 4.72485 11.8478 4.81798 11.7789 4.86393L11.1267 5.29872C11.0763 5.33231 11.0107 5.33231 10.9603 5.29872L10.3081 4.86393C10.2392 4.81798 10.2206 4.72485 10.2665 4.65592Z" fill="#D5DFEB"/>
    </svg>
    ;

    return svg
};

export default IconAccordion;