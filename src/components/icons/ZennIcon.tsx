import React, { FC, useState, useEffect } from "react";

type Props = { size?: number; color?: string };

export const ZennIcon: FC<Props> = (props) => {
  const { size = 30, color = "#3EA8FF" } = props;

  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <path
        fill={color}
        className="st0"
        d="M2.4 83.3h17c.9 0 1.7-.5 2.2-1.2L68.4 5.2c.6-1-.1-2.2-1.3-2.2H51c-.8 0-1.5.4-1.9 1.1L1.6 81.9c-.3.6.1 1.4.8 1.4zM61 82.1l22.1-35.5c.7-1.1-.1-2.5-1.4-2.5h-16c-.6 0-1.2.3-1.5.8L41.5 81.2c-.6.9.1 2.1 1.2 2.1H59c.8 0 1.6-.4 2-1.2z"
      ></path>
    </svg>
  );
};
