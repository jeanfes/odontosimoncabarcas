import type { Icon } from "../../interfaces/icon";

export const IconChevronBottom = ({
  color = "#e3e3e3",
  width = 24,
  height = 24,
}: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={color}
    >
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );
};
