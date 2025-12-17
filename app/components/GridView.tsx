"use client";

import Link from "next/link";
import React from "react";
export default function GridView({
  cards,
  sectionTitle,
}: {
  cards: {
    title: string;
    image: string;
    description: string;
    date?: string;
    id: string;
  }[];
  sectionTitle: React.ReactNode;
}) {
  const Card = ({
    id,
    title,
    image,
    description,
    date,
  }: {
    id: string;
    title: string;
    image: string;
    description: string;
    date?: string;
  }) => {
    return (
      <div className="flex">
        <div
          className="shrink-0 px-2 md:px-4"
          style={{
            // flex: "0 0 85%",
            minWidth: 0,
          }}
        >
          <div
            className={`relative rounded-2xl overflow-hidden transition-all duration-500 ease-out border border-[#E3E3E3]`}
          >
            <div className="relative rounded-l scale-x-105 overflow-hidden shrink-0">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative p-5 pb-3 flex flex-col">
              <div>
                <h2 className="font-bold text-[#254055] mb-3 ">{title}</h2>

                <p className="text-[#4D4D4D] md:text-lg text-sm">
                  {description}
                </p>
              </div>

              <div className="mt-8 flex justify-between">
                <Link
                  href={`${id}`}
                  className="hover:underline text-[#81C713] md:text-base text-sm"
                >
                  Lees meer
                </Link>
                {date ? (
                  <span className="text-[#4D4D4D] md:text-base text-sm">
                    {date}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="md:flex hidden flex-col items-center md:py-24 py-10 "
    >
      {sectionTitle}

      <div className="grid grid-cols-3 gap-y-10 gap-x-15 mt-10">
        {cards.map((card, index) => (
          <Card
            id={card.id}
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
}
