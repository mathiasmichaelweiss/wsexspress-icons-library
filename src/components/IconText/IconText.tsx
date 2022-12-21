import React from "react";
import { IconProps } from "../iconInterfaces";

const IconText = ({ size = 16 }: IconProps) => {
    

    const svg = <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9244 3H4.07654L4 5.49189H4.44173C4.6815 3.92788 5.14075 3.68578 6.92519 3.62297L7.31619 3.60981V11.5383C7.31619 12.2099 7.1834 12.3689 6.11735 12.4733V13H9.88173V12.4733C8.81015 12.3689 8.67735 12.2099 8.67735 11.5383V3.60981L9.07481 3.62297C10.8583 3.68578 11.3194 3.92788 11.5583 5.49291H12L11.9244 3Z" fill="#8894A5"/>
    </svg>    
    ;

    return svg
};

export default IconText;