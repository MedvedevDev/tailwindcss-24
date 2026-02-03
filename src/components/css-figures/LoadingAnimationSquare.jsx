import { Circle } from "../ui/Circle";

export function LoadingAnimationSquare() {
  const colors = ["bg-red-700", "bg-orange-600", "bg-blue-700"];

  return (
    <div className="container flex place-content-center items-center h-screen">
      {colors.map((color, i) => (
        <Circle key={i} className={`${color} animate-spin`} />
      ))}
    </div>
  );
}
