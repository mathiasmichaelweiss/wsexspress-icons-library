import React from "react";
import { IconProps } from "../iconInterfaces";

const IconCollapseActive = ({ size = 16 }: IconProps) => {
    

    const svg = <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.31579 6.1579C2.5891 6.1579 2 6.747 2 7.47369V11.6842C2 12.4109 2.5891 13 3.31579 13H12.7895C13.5162 13 14.1053 12.4109 14.1053 11.6842V7.47369C14.1053 6.747 13.5162 6.1579 12.7895 6.1579H3.31579ZM13.0526 11.9474H3.05263V7.21053H13.0526V11.9474Z" fill="#2A2F39"/>
    <path d="M7.26319 8.26315H3.57898V8.78947H7.26319V8.26315Z" fill="#8894A5"/>
    <path d="M8.84214 9.3158H3.57898V9.84211H8.84214V9.3158Z" fill="#1DBC7B"/>
    <path d="M7.78951 10.3684H3.57898V10.8947H7.78951V10.3684Z" fill="#8894A5"/>
    <path d="M2 4.31579C2 3.5891 2.5891 3 3.31579 3H9.10526C9.83195 3 10.4211 3.5891 10.4211 4.31579C10.4211 5.04248 9.83195 5.63158 9.10526 5.63158H3.31579C2.5891 5.63158 2 5.04248 2 4.31579Z" fill="#2A2F39"/>
    </svg>     
    ;

    return svg
};

export default IconCollapseActive;