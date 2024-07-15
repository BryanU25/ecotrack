import React, { FC } from "react";

type BaseAvatar = {
  variant?: "circular" | "rounded";
  size?: "sm" | "md" | "lg" | "xl";
};

type ImageAvatar = BaseAvatar & {
  type: "image";
  alt?: string;
  src: string;
};

type TextAvatar = BaseAvatar & {
  type: "text";
  name: string;
};

type IconAvatar = BaseAvatar & {
  type: "icon";
  icon: React.JSX.Element;
};

type AvatarProps = ImageAvatar | TextAvatar | IconAvatar;

/* eslint-disable no-unused-vars */
enum AvatarVariant {
  circular = "rounded-full",
  rounded = "rounded-[5px]",
}

enum AvatarSize {
  sm = "h-[25px] w-[25px] text-sm",
  md = "h-[35px] w-[35px] text-sm",
  lg = "h-[50px] w-[50px] text-base",
  xl = "h-[100px] w-[100px] text-xl",
}

/* eslint-enable no-unused-vars */

const Avatar: FC<AvatarProps> = (props) => {
  if (props.type === "image") {
    const { src, alt, variant = "circular", size = "sm" } = props;
    return (
      <div
        className={`relative flex shrink-0 select-none items-center justify-center bg-slate-200 font-bold uppercase text-slate-800 h-10 w-10 ${AvatarVariant[variant]} ${AvatarSize[size]} overflow-hidden`}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
    );
  }

  if (props.type === "text") {
    const { name, variant = "circular", size = "sm" } = props;
    return (
      <div
        className={`relative flex shrink-0 select-none items-center justify-center bg-slate-200 font-bold uppercase text-black ${AvatarVariant[variant]} ${AvatarSize[size]}`}
      >
        <span>{name}</span>
      </div>
    );
  }

  if (props.type === "icon") {
    const { icon, variant = "circular", size = "sm" } = props;
    return (
      <div
        className={`relative flex shrink-0 select-none items-center justify-center bg-slate-200 font-bold uppercase text-black ${AvatarVariant[variant]} ${AvatarSize[size]} `}
      >
        {icon}
      </div>
    );
  }
};

export default Avatar;
