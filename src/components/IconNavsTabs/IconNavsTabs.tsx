import React from "react";
import { IconProps } from "../iconInterfaces";

const IconNavsTabs = ({ size = 16 }: IconProps) => {
    

    const svg = <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.08697 3.86957H5.47827V5.6087H8.08697V3.86957Z" fill="#2A2F39"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.26086 3.65218H8.30434V5.82609H5.26086V3.65218ZM5.69565 4.08696V5.39131H7.86956V4.08696H5.69565Z" fill="#2A2F39"/>
    <path d="M10.6956 3.86957H8.08691V5.6087H10.6956V3.86957Z" fill="#8692A2"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.86951 3.65218H10.913V5.82609H7.86951V3.65218ZM8.30429 4.08696V5.39131H10.4782V4.08696H8.30429Z" fill="#2A2F39"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.21741 3.86957C2.21741 3.50938 2.5094 3.21739 2.86958 3.21739H5.04349C5.40368 3.21739 5.69567 3.50938 5.69567 3.86957V5.16247C5.69567 5.28253 5.793 5.37986 5.91306 5.37986H12.8696C13.2298 5.37986 13.5218 5.67185 13.5218 6.03204V12.1304C13.5218 12.4906 13.2298 12.7826 12.8696 12.7826H2.86958C2.5094 12.7826 2.21741 12.4906 2.21741 12.1304V3.86957ZM2.86958 3.65217C2.74952 3.65217 2.65219 3.74951 2.65219 3.86957V12.1304C2.65219 12.2505 2.74952 12.3478 2.86958 12.3478H12.8696C12.9896 12.3478 13.087 12.2505 13.087 12.1304V6.03204C13.087 5.91197 12.9896 5.81464 12.8696 5.81464H5.91306C5.55288 5.81464 5.26089 5.52266 5.26089 5.16247V3.86957C5.26089 3.74951 5.16355 3.65217 5.04349 3.65217H2.86958Z" fill="#2A2F39"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3044 5.54593V4.73913C13.3044 4.25889 12.9151 3.86957 12.4348 3.86957H10.6957V5.37986H12.8696C13.0366 5.37986 13.189 5.44266 13.3044 5.54593Z" fill="#D5DFEB"/>
    <path d="M13.3044 5.54593L13.1594 5.70792L13.5217 6.03225V5.54593H13.3044ZM10.6957 3.86957V3.65218H10.4783V3.86957H10.6957ZM10.6957 5.37986H10.4783V5.59725H10.6957V5.37986ZM13.087 4.73913V5.54593H13.5217V4.73913H13.087ZM12.4348 4.08696C12.795 4.08696 13.087 4.37895 13.087 4.73913H13.5217C13.5217 4.13882 13.0351 3.65218 12.4348 3.65218V4.08696ZM10.6957 4.08696H12.4348V3.65218H10.6957V4.08696ZM10.9131 5.37986V3.86957H10.4783V5.37986H10.9131ZM10.6957 5.59725H12.8696V5.16247H10.6957V5.59725ZM12.8696 5.59725C12.9811 5.59725 13.0823 5.63894 13.1594 5.70792L13.4494 5.38394C13.2957 5.24638 13.0921 5.16247 12.8696 5.16247V5.59725Z" fill="#2A2F39"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.17392 6.91304C3.9338 6.91304 3.73914 7.1077 3.73914 7.34782V10.8261C3.73914 11.0662 3.9338 11.2609 4.17392 11.2609H8.23974C8.47983 11.2609 8.67453 11.0662 8.67453 10.8261V7.34782C8.67453 7.1077 8.47983 6.91304 8.23974 6.91304H4.17392ZM4.82608 7.50056C4.55026 7.50056 4.32667 7.72417 4.32667 8C4.32667 8.27582 4.55026 8.49939 4.82608 8.49939C5.1019 8.49939 5.32549 8.27582 5.32549 8C5.32549 7.72417 5.1019 7.50056 4.82608 7.50056Z" fill="#D5DFEB"/>
    <path d="M4.35602 10.5264C4.42458 10.6293 4.48822 10.6293 4.59105 10.6293C4.69387 10.6293 7.91068 10.644 7.91068 10.644C7.91068 10.644 8.0135 10.5852 8.04285 10.4824C8.07224 10.3796 8.0135 10.2767 8.0135 10.2767L6.83842 8.55817C6.83842 8.55817 6.79433 8.45535 6.67681 8.45535C6.55933 8.45535 6.48589 8.55817 6.48589 8.55817L5.63393 9.792L5.32547 9.42478C5.32547 9.42478 5.28141 9.36604 5.20796 9.36604C5.13452 9.36604 5.07577 9.42478 5.07577 9.42478C5.07577 9.42478 4.37072 10.2473 4.35602 10.2767C4.34133 10.3061 4.28747 10.4236 4.35602 10.5264Z" fill="#8894A5"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.08691 4.73913C3.08691 4.61907 3.18424 4.52174 3.30431 4.52174H4.39126C4.51132 4.52174 4.60865 4.61907 4.60865 4.73913C4.60865 4.85919 4.51132 4.95652 4.39126 4.95652H3.30431C3.18424 4.95652 3.08691 4.85919 3.08691 4.73913Z" fill="#8894A5"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.60864 7.34782C9.60864 7.22776 9.70597 7.13043 9.82603 7.13043H11.9999C12.12 7.13043 12.2173 7.22776 12.2173 7.34782C12.2173 7.46789 12.12 7.56521 11.9999 7.56521H9.82603C9.70597 7.56521 9.60864 7.46789 9.60864 7.34782Z" fill="#8894A5"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.60864 8.21739C9.60864 8.09733 9.70597 8 9.82603 8H11.9999C12.12 8 12.2173 8.09733 12.2173 8.21739C12.2173 8.33745 12.12 8.43478 11.9999 8.43478H9.82603C9.70597 8.43478 9.60864 8.33745 9.60864 8.21739Z" fill="#8894A5"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.60864 9.08696C9.60864 8.9669 9.70597 8.86957 9.82603 8.86957H11.9999C12.12 8.86957 12.2173 8.9669 12.2173 9.08696C12.2173 9.20702 12.12 9.30435 11.9999 9.30435H9.82603C9.70597 9.30435 9.60864 9.20702 9.60864 9.08696Z" fill="#8894A5"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.60864 9.95652C9.60864 9.83646 9.70597 9.73913 9.82603 9.73913H11.9999C12.12 9.73913 12.2173 9.83646 12.2173 9.95652C12.2173 10.0766 12.12 10.1739 11.9999 10.1739H9.82603C9.70597 10.1739 9.60864 10.0766 9.60864 9.95652Z" fill="#8894A5"/>
    </svg>       
    ;

    return svg
};

export default IconNavsTabs;