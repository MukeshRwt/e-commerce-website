import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div
      className="curser-pointer flex flex-col items-center
     bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3F"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-fill h-full "
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.brand}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
