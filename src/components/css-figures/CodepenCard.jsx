import { ListItem } from "../ui/List";

export function CodepenCard() {
  const listItemTextArray = ["Comments: 11", "Likes: 32"];

  return (
    <div
      style={{
        "--bg-main": "#131417",
        "--bg-card": "#1e1f26",
        "--bg-stats": "#131417",
        "--usernname": "#b7bbc8",
      }}
      className="group max-w-xs bg-[var(--bg-card)] m-auto p-[1em] rounded-[10px] text-white"
    >
      <div>
        <img
          src="src\assets\sky.jpg"
          alt=""
          className="max-w-full object-cover rounded-[10px]"
        />
      </div>
      <div className="flex mt-[1em]">
        <div>
          <img
            src="src\assets\avatar.webp"
            alt=""
            className="size-[50px] rounded-[10px] mr-[1em]"
          />
        </div>
        <div className="leading-[1.5]">
          <h3 className="p-0 m-0 font-black text-[1rem]">Sky Net Project</h3>
          <p className="p-0 m-0 text-[.85rem] text-[var(--usernname)]">
            Johny Abardino
          </p>
        </div>
      </div>
      <ul className="overflow-hidden flex gap-2 mt-0 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-[.75em] transition-all duration-300 ease-out">
        {listItemTextArray.map((t, i) => (
          <ListItem
            key={i}
            className="list-none bg-[var(--bg-stats)] px-2 py-1 rounded-[5px]"
            text={t}
          />
        ))}
      </ul>
    </div>
  );
}
