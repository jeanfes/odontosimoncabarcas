import type { Icon } from "../../interfaces/icon";

export const IconArrowRight = ({
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
      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
    </svg>
  );
};
