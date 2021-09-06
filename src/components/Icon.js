import React from 'react';
import { ICON_PROPS } from "../utils/constants";
import {  RiUser3Line } from "react-icons/ri";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import {
  AiOutlineLoading3Quarters,
  AiOutlineCheckCircle,
  AiOutlinePlusCircle,
  AiOutlineHome,
  AiOutlineForward,
} from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const icons = {
    loading: AiOutlineLoading3Quarters,
    check: AiOutlineCheckCircle,
    user: RiUser3Line,
    remove: IoIosRemoveCircleOutline,
    plus: AiOutlinePlusCircle,
    menu: HiOutlineMenuAlt3,
    home: AiOutlineHome,
    forward: AiOutlineForward,
  };
function Icon({type}) {
    const IconComponent = icons[type];

    return (
      <IconComponent
        className={type === "loading" && "animate-spin"}
        {...ICON_PROPS}
      />
    );
}

export default Icon
