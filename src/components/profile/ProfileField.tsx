import { useState } from "react";
import { ElementPorc } from "../../utilities";
import { InfluentialButton } from "./InfluentialButton";

export interface ProfileFieldProps {
  field: ElementPorc;
}

export const ProfileField = ({ field }: ProfileFieldProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="d-flex align-items-center justify-content-center">
      <span
        className={`m-1 border border-gray rounded p-2 ${
          hover ? "bg-black text-white" : ""
        }`}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {field.category}
      </span>

      <InfluentialButton rate={field.traitors} />
    </div>
  );
};
