import { ColorfulButton } from "./css-figures/ColorfulButton";

export function Canvas() {
  return (
    <div className="flex-1 p-5 bg-(--canvas-bg) flex justify-center items-center">
      <ColorfulButton />
    </div>
  );
}
