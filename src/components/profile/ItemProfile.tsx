import { nanoid } from "nanoid";
import { ProfileField } from ".";
import { ElementPorc, Range } from "../../utilities";
import React from "react";
import { ProfileRange } from "./ProfileRange";

type ProfileElementType = ElementPorc | Range;

interface ItemProfileProps {
  title: string;
  elements: ProfileElementType[];
  range?: boolean;
}

export const ItemProfile = ({ title, elements, range }: ItemProfileProps) => {
  return (
    <div className="my-3">
      <span className="row justify-content-center fw-bold card-text">
        {title}
      </span>
      {elements.map((element: ProfileElementType) => (
        <React.Fragment key={nanoid()}>
          {range ? (
            <ProfileRange credits={element as Range} />
          ) : (
            <ProfileField field={element as ElementPorc} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
