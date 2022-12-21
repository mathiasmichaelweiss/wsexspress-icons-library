import React from "react";
import { IconProps } from "../iconInterfaces";

const IconPopover = ({ size = 16 }: IconProps) => {
    

    const svg = <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.17647C3 3.52672 3.52672 3 4.17647 3H12.4118C13.0615 3 13.5882 3.52672 13.5882 4.17647V10.0588C13.5882 10.7086 13.0615 11.2353 12.4118 11.2353H9.17647L6.80377 12.8171C6.68649 12.8953 6.52941 12.8112 6.52941 12.6702V11.2353H4.17647C3.52672 11.2353 3 10.7086 3 10.0588V4.17647ZM5.94118 7.11765C5.94118 6.79278 6.20454 6.52941 6.52941 6.52941C6.85428 6.52941 7.11765 6.79278 7.11765 7.11765C7.11765 7.44252 6.85428 7.70588 6.52941 7.70588C6.20454 7.70588 5.94118 7.44252 5.94118 7.11765Z" fill="#8692A3"/>
    <path d="M8.8824 7.11765C8.8824 6.79278 8.61904 6.52942 8.29417 6.52942C7.96929 6.52942 7.70593 6.79278 7.70593 7.11765C7.70593 7.44253 7.96929 7.70589 8.29417 7.70589C8.61904 7.70589 8.8824 7.44253 8.8824 7.11765Z" fill="#D5DFEB"/>
    <path d="M10.6471 7.11765C10.6471 6.79278 10.3837 6.52942 10.0588 6.52942C9.73394 6.52942 9.47058 6.79278 9.47058 7.11765C9.47058 7.44253 9.73394 7.70589 10.0588 7.70589C10.3837 7.70589 10.6471 7.44253 10.6471 7.11765Z" fill="#2A2F39"/>
    </svg>        
    ;

    return svg
};

export default IconPopover;