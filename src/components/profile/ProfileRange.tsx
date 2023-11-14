import { Range } from "../../utilities";
import { useState } from "react";
import { InfluentialButton } from "./InfluentialButton";

interface ProfileRangeProps {
  credits: Range;
}

export const ProfileRange = ({ credits }: ProfileRangeProps) => {
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
        {credits.min === credits.max
          ? `${credits.min}`
          : `[${credits.min}-${credits.max}]`}
      </span>

      <InfluentialButton rate={credits.traitors} />
    </div>
  );
};
