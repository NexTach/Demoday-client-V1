import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  position: absolute;
  left: 1.5rem;
  cursor: pointer;
`;

interface BackIconProps {
  onClick: () => void;
}

const BackIcon: React.FC<BackIconProps> = ({ onClick }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
    >
      <path
        d="M9.09035 12.2425L16.623 19.7752C16.8218 19.9739 16.9186 20.2079 16.9134 20.4771C16.9083 20.7463 16.8064 20.9803 16.6076 21.179C16.4089 21.3777 16.175 21.4771 15.9058 21.4771C15.6365 21.4771 15.4026 21.3777 15.2039 21.179L7.5327 13.5232C7.3519 13.3425 7.21792 13.1399 7.13075 12.9156C7.04358 12.6912 7 12.4668 7 12.2425C7 12.0181 7.04358 11.7938 7.13075 11.5694C7.21793 11.3451 7.35192 11.1425 7.5327 10.9617L15.2039 3.29059C15.4026 3.09188 15.6391 2.99508 15.9135 3.00019C16.1878 3.00533 16.4243 3.10725 16.623 3.30597C16.8218 3.50468 16.9211 3.73865 16.9211 4.00787C16.9211 4.2771 16.8218 4.51108 16.623 4.70979L9.09035 12.2425Z"
        fill="#625D5B"
      />
    </Svg>
  );
};

export default BackIcon;
