//
import { HTMLAttributes } from "react";

//
import { classNames } from "utilities";

interface ICard extends HTMLAttributes<HTMLDivElement> {}
export const Card: React.FCC<ICard> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "card-bordered card border-base-300 bg-base-100",
        className
      )}
    >
      <div className="card-body">{children}</div>
    </div>
  );
};
