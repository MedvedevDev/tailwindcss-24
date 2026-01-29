export function Sidebar({ figures, setFigure, activeFigureId }) {
  return (
    <div className="p-5 shadow-lg w-56  bg-(--sidebar-bg) text-white">
      <ul className="space-y-2 py-2">
        {figures.map((figure) => (
          <li
            key={figure.id}
            className={`border-b border-white  
           cursor-pointer ${figure.id === activeFigureId ? "bg-gray-700" : "hover:bg-gray-800"}`}
            onClick={() => setFigure(figure.id)}
          >
            {figure.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
