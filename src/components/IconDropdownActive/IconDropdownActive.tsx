import React from "react";
import { IconProps } from "../iconInterfaces";

const IconDropdownActive = ({ size = 16 }: IconProps) => {
    

    const svg = <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.08333 3C2.93274 3 2 3.93274 2 5.08333V10.9167C2 12.0672 2.93274 13 4.08333 13H11.3453C12.4958 13 13.4286 12.0672 13.4286 10.9167V5.08333C13.4286 3.93274 12.4958 3 11.3453 3H4.08333ZM5.67851 6.33333H9.98816C10.7306 6.33333 11.1024 7.23095 10.5774 7.75592L8.42259 9.91074C8.09715 10.2362 7.56952 10.2362 7.24408 9.91074L5.08926 7.75592C4.56428 7.23095 4.93609 6.33333 5.67851 6.33333Z" fill="#1DBC7B"/>
    </svg>    
    ;

    return svg
};

export default IconDropdownActive;