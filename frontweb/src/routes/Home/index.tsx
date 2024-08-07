import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import Table from "../../components/Table";

const addresses: string[] = [
  "192.168.1.11",
  "192.168.1.12",
  "192.168.1.13",
  "192.168.1.14",
  "192.168.1.15",
  "192.168.1.16",
  "192.168.1.17",
  "192.168.1.18",
  "192.168.1.19",
  "192.168.1.20",
];

export default function Home() {
  const [address, setAddress] = useState<string>("");

  const requestIp = async (ip: string) => {
    try {
      const config: AxiosRequestConfig = {
        url: `http://${ip}/win&FP=0`,
      };
      const response = await axios(config);
      console.log(response.data);
      setAddress(ip);
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  };

  useEffect(() => {
    addresses.forEach((ip) => requestIp(ip));
  }, [address]);

  return (
    <div className="boxes">
      {addresses.map((address, index) => (
        <Table
          key={index}
          id={`box_${index}`}
          address={address}
          label={`MESA ${index + 3}`}
        />
      ))}
    </div>
  );
}
