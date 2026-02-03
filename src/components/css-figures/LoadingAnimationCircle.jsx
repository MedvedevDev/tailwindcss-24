import { Circle } from "../ui/Circle";

export function LoadingAnimationCircle() {
  return (
    <div className="container flex place-content-center items-center h-screen">
      {Array.from({ length: 3 }).map((_, i) => (
        <Circle key={i} className="bg-pink-600 rounded-full animate-pulse" />
      ))}
    </div>
  );
}
