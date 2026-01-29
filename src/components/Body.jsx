import { Sidebar } from "./Sidebar";
import { Canvas } from "./Canvas";
import { FIGURES } from "../figures";
import { useState } from "react";

export function Body() {
  const [activeFigureId, setActiveFigureId] = useState("colorful-btn");

  return (
    <div className="flex h-screen">
      <Sidebar
        figures={FIGURES}
        setFigure={setActiveFigureId}
        activeFigureId={activeFigureId}
      />
      <Canvas figures={FIGURES} figureId={activeFigureId} />
    </div>
  );
}
