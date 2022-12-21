import React from "react";
import { IconProps } from "../iconInterfaces";

const IconAccordionActive = ({ size = 16 }: IconProps) => {
    

    const svg = <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.08696 7.34784C3.48665 7.34784 3 7.83449 3 8.4348V11.9131C3 12.5134 3.48665 13 4.08696 13H11.913C12.5133 13 13 12.5134 13 11.9131V8.4348C13 7.83449 12.5133 7.34784 11.913 7.34784H4.08696ZM12.1304 12.1304H3.86957V8.2174H12.1304V12.1304Z" fill="#2A2F39"/>
    <path d="M7.3478 9.08694H4.30432V9.52173H7.3478V9.08694Z" fill="#8894A5"/>
    <path d="M8.65215 9.95651H4.30432V10.3913H8.65215V9.95651Z" fill="#1DBC7B"/>
    <path d="M7.78258 10.8261H4.30432V11.2609H7.78258V10.8261Z" fill="#8894A5"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.08696 3C3.48665 3 3 3.48665 3 4.08696V5.82609C3 6.4264 3.48665 6.91304 4.08696 6.91304H11.913C12.5133 6.91304 13 6.4264 13 5.82609V4.08696C13 3.48665 12.5133 3 11.913 3H4.08696ZM12.1304 5.93478H3.86957V3.97826H12.1304V5.93478Z" fill="#2A2F39"/>
    <path d="M8.21736 4.73914H4.30432V5.17392H8.21736V4.73914Z" fill="#1DBC7B"/>
    <path d="M10.3914 4.73914L11.0435 5.17392L11.6957 4.73914" stroke="#8692A3" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    ;

    return svg
};

export default IconAccordionActive;