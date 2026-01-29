export function Canvas({ figures, figureId }) {
  const activeFigure = figures.find((f) => f.id === figureId); // dynamicaly find a figure to render
  const FigureComponent = activeFigure?.component;

  return (
    <div className="flex-1 p-5 bg-(--canvas-bg) flex justify-center items-center">
      {FigureComponent ? <FigureComponent /> : null}
    </div>
  );
}
