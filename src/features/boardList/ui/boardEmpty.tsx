const BoardEmpty = () => {
  return (
    <>
      <div className="flex  w-full h-full items-center justify-center text-zinc-800">
        <div className="text-center flex flex-col justify-center items-center gap-2">
          <h2 className="text-2xl font-bold tracking-tight">
            There is no board yet
          </h2>
          <p className="font-medium tracking-tight">
            Click the button and start flashing!
          </p>
        </div>
      </div>
    </>
  );
};

export default BoardEmpty;
