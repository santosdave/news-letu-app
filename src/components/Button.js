import Icon from "./Icon";
import React from "react";
function Button({value,type,action,variant,loading=false,fullWidth,icon}) {
    let variantClassname;
    switch (variant) {
        case "primary":
          variantClassname =
            "bg-primary text-white hover:bg-primaryDark focus:ring-primaryDark";
          break;
        case "secondary":
          variantClassname =
            "bg-secondary text-white hover:bg-secondaryDark focus:ring-secondaryDark";
          break;
        case "frame":
          variantClassname =
            "bg-white text-primary border border-primary hover:bg-gray-100 focus:ring-primary";
          break;
        case "green":
          variantClassname =
            "bg-green-100 text-green-600 hover:bg-green-200 focus:ring-bg-green-200";
          break;
        case "red":
          variantClassname =
            "bg-red-100 text-red-600 hover:bg-red-200 focus:ring-bg-green-200";
          break;
        default:
          variantClassname =
            "bg-gray-100 text-primary hover:bg-gray-300 focus:ring-gray-300";
          break;
      }
      return (
        <button
          type={type}
          className={`${variantClassname} ${fullWidth && "w-full"} ${
            icon ? "justify-between" : "justify-center"
          } p-3 flex items-center whitespace-nowrap space-x-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all`}
          onClick={action && action}
        >
          {value && <div>{loading ? <Icon type="loading" /> : value}</div>}
          {icon && <Icon type={icon} />}
        </button>
      );
}

export default Button
