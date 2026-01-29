export function ColorfulButton() {
  return (
    <div
      style={{
        "--btn-bg": "#000",
        "--btn-color": "#cbcbcb",
        "--btn-color-hover": "#fff",
        "--grad-1": "#eeaf61",
        "--grad-2": "#fb9062",
        "--grad-3": "#ee5d6c",
        "--grad-4": "#ce4993",
        "--grad-5": "#6a0d83",
      }}
      className="group p-0.5   bg-[linear-gradient(115deg,var(--grad-1),var(--grad-2),var(--grad-3),var(--grad-4),var(--grad-5))]
          hover:bg-[linear-gradient(230deg,var(--grad-1),var(--grad-2),var(--grad-3),var(--grad-4),var(--grad-5))]"
    >
      <button className="border-none bg-[var(--btn-bg)] text-[var(--btn-color)] px-[4em] py-[1em] tracking-widest group-hover:py-[1.1em] group-hover:px-[4.1em] group-hover:text-[var(--btn-color-hover)]">
        Start!
      </button>
    </div>
  );
}
