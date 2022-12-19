import React from "react";
import { IconProps } from "../iconInterfaces";

const IconTitle = ({ size = 16 }: IconProps) => {
    const viewBox = `0 0 ${size} ${size}`

    const svg = <svg width="{size}" height="{size}" viewBox="{viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.06921 13H6.54577V12.4271H6.07703C5.92077 12.4271 5.77321 12.375 5.63432 12.2708C5.50411 12.1667 5.43901 11.9713 5.43901 11.6849V8.36459H9.65775V11.6849C9.65775 11.9713 9.59265 12.1667 9.46244 12.2708C9.33223 12.375 9.18467 12.4271 9.01973 12.4271H8.55099V13H12.0275V12.4271H11.5458C11.3895 12.4271 11.2463 12.375 11.1161 12.2708C10.9859 12.1667 10.9208 11.9713 10.9208 11.6849V4.64063C10.9208 4.34549 10.9859 4.15017 11.1161 4.05469C11.2463 3.95052 11.3895 3.89844 11.5458 3.89844H12.0275V3.3125H8.55099V3.89844H9.01973C9.18467 3.89844 9.33223 3.95052 9.46244 4.05469C9.59265 4.15017 9.65775 4.34549 9.65775 4.64063V7.51823H5.43901V4.64063C5.43901 4.34549 5.50411 4.15017 5.63432 4.05469C5.77321 3.95052 5.92077 3.89844 6.07703 3.89844H6.54577V3.3125H3.06921V3.89844H3.55098C3.70723 3.89844 3.85047 3.95052 3.98067 4.05469C4.11088 4.15017 4.17599 4.34549 4.17599 4.64063V11.6849C4.17599 11.9713 4.11088 12.1667 3.98067 12.2708C3.85047 12.375 3.70723 12.4271 3.55098 12.4271H3.06921V13Z" fill="#8894A5"/>
    </svg>    
    ;

    return svg
};

export default IconTitle;