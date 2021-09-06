import React from 'react';
import { ImPause, ImPlay2 } from "react-icons/im";
import { ICON_PROPS } from "../utils/constants";
import { RiHome4Line, RiUser3Line } from "react-icons/ri";
import { IoMdFitness, IoIosRemoveCircleOutline } from "react-icons/io";
import {
  AiOutlineLoading3Quarters,
  AiOutlineCheckCircle,
  AiOutlinePlusCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {FaSearch} from "react-icons/fa";
import {GiMaterialsScience,GiTechnoHeart,GiWorld} from "react-icons/gi";
const icons = {
    loading: AiOutlineLoading3Quarters,
    check: AiOutlineCheckCircle,
    play: ImPlay2,
    politics: GiWorld,
    science:GiMaterialsScience,
    technology: GiTechnoHeart,
    home: RiHome4Line,
    fitness: IoMdFitness,
    user: RiUser3Line,
    remove: IoIosRemoveCircleOutline,
    plus: AiOutlinePlusCircle,
    menu: HiOutlineMenuAlt3,
    search:FaSearch,
    logout:AiOutlineLogout,
    
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
