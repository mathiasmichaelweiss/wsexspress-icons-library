import React from "react";
import { IconProps } from "../iconInterfaces";

const IconSpinnerActive = ({ size = 16 }: IconProps) => {
    

    const svg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C5.23858 3 3 5.23858 3 8C3 10.7615 5.23858 13 8 13C10.7615 13 13 10.7615 13 8C13 5.23858 10.7615 3 8 3ZM8 4.11111C5.85223 4.11111 4.11111 5.85223 4.11111 8C4.11111 10.1478 5.85223 11.8889 8 11.8889C10.1478 11.8889 11.8889 10.1478 11.8889 8C11.8889 5.85223 10.1478 4.11111 8 4.11111Z" fill="#2A2F39"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C7.69318 3.00001 7.44446 3.24874 7.44446 3.55556C7.44446 3.86238 7.69318 4.1111 8 4.11111C10.1478 4.11111 11.8889 5.85223 11.8889 8C11.8889 8.30683 12.1376 8.55556 12.4444 8.55556C12.7513 8.55556 13 8.30683 13 8C13 7.99926 13 7.99853 13 7.99779C12.9988 5.23738 10.7607 3 8 3Z" fill="#1DBC7B"/>
    </svg>    
    ;

    return svg
};

export default IconSpinnerActive;