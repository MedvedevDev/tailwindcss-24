import { Sidebar } from "./Sidebar";
import { Canvas } from "./Canvas";

export function Body() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Canvas />
    </div>
  );
}
