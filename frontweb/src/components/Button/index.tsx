import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface ButtonProps {
  address: string;
  text: string;
  styleClass: string;
  color: number[];
}

const Button: React.FC<ButtonProps> = ({ address, text, styleClass, color }) => {
  const handleClick = async () => {
    const config: AxiosRequestConfig = {
      url: `http://${address}/win&FP=0&FX=${color[4]}&SX=${color[5]}&IX=${color[6]}&R=${color[0]}&G=${color[1]}&B=${color[2]}&A=${color[3]}`,
      method: 'GET',
    };
    try {
      const response = await axios(config);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching IP:', error);
    }
  };

  return (
    <button onClick={handleClick} className={`button ${styleClass}`}>
      {text}
    </button>
  );
};

export default Button;
