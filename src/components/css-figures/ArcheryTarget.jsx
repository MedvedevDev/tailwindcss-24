export function ArcheryTarget() {
  return (
    <div className="h-screen flex place-content-center items-center ">
      <div className="rounded-full h-[200px] w-[200px] bg-black flex justify-center items-center border-none">
        <div className="rounded-full h-[150px] w-[150px] bg-blue-600 flex justify-center items-center border-none">
          <div className="rounded-full   h-[100px] w-[100px] bg-red-500 flex justify-center items-center border-none">
            <div className="rounded-full h-[50px] w-[50px] bg-yellow-400 flex justify-center items-center border-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
