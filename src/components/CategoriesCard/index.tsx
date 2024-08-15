import { categoriesLikeCard } from "@/types/cardtype";
import React, { FC } from "react";

const CategoriesCard: FC<categoriesLikeCard> = ({
  title,
  image,
}: categoriesLikeCard) => {
  return (
    <div className="relative">
      <div className="w-[258px] h-[215px] px-[15px] py-[25px] group">
        <div className="w-full rounded-xl overflow-hidden cursor-pointer">
          <img
            className="rounded-xl transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={image}
            alt="Category"
          />
        </div>
        <div className="flex justify-center mt-2">
          <h2 className="text-white text-[18px] font-bold relative inline-block">
            {title}
            <span className="block h-[2px] bg-white w-0 transition-all duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 group-hover:w-full"></span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
