import React from "react";
import { LazyImage } from "./Image";

interface OutPartnerProps {
  id: number;
  logo: string;
}

export const PartnerCard: React.FC<OutPartnerProps> = ({ logo, id }) => {
  return (
    <div className="rounded-lg overflow-hidden sm:w-[156px] w-[120px] sm:h-[100px] h-[72px] flex flex-col items-center justify-between text-white">
      <div className="flex-1 flex items-center justify-center w-[93px] h-[30px]">
        <LazyImage
          src={logo}
          alt={`logo${id}`}
          className="max-h-[60px] object-contain"
        />
      </div>
    </div>
  );
};
