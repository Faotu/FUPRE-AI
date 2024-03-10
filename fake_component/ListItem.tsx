"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onClick = () => {
    // I will be adding authentication to navigate
    router.push(href);
  };
  return (
    <div>
      <button
        onClick={onClick}
        className="
    relative
    group
    flex
    items-center
    rouded-md
    overflow-hidden
    gap-x-4
    bg-neutral-100/10
    hover:bg-neutral-100/20
    transition
    pr-20
    "
      >
        <div
          className="
        relative
        min-h-[64px]
        min-w-[64px]

        "
        >
          <Image className="object-cover" fill src={image} alt="Image" />
        </div>
        <p
          className="
          font-medium truncate py-5
          "
        >
          {name}
        </p>
        <div
          className="
        absolute
        transition
        opacity-0
        rounded-full
        flex
        items-center
        justify-center
        bg-green-500
        p-4
        drop-shadow-md
        right-5
        group-hover:opacity-100
        hover:scale-110
        "
        >
          <FaPlay className="text-black" />
        </div>
      </button>
    </div>
  );
};

export default ListItem;

// Faotu Happy
