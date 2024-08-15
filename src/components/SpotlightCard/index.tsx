import React, { FC } from "react";
import { IoLogoBitcoin } from "react-icons/io";
import { spotlightLoveCards } from "@/types/cardtype";

const SpotlingCard: FC<spotlightLoveCards> = ({
  title,
  image,
  price,
}: spotlightLoveCards) => {
  return (
    <div>
      <div className="w-[338px] h-[419px] px-[15px] py-[25px] bg-[#262626] rounded-xl group">
        <div className="w-full rounded-xl overflow-hidden cursor-pointer">
          <img
            className="rounded-xl  transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={image}
            alt={title}
          />
        </div>
        <h2 className="text-white text-[18px] mt-2 font-bold">{title}</h2>
        <p className="mt-2 text-[#17EF97] font-bold flex items-center text-[16px]">
          <IoLogoBitcoin />
          {price}
        </p>
      </div>
    </div>
  );
};

export default SpotlingCard;
