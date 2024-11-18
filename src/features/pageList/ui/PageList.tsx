const ListItem = ({ type = "inactive" }: any) => {
  if (type === "active") {
    return (
      <>
        <li className="bg-zinc-300 px-2 py-1 text-zinc-900 rounded-md cursor-pointer">
          Enter Title Here
        </li>
      </>
    );
  }
  if (type === "inactive") {
    return (
      <>
        <li className="bg-white px-2 py-1 cursor-pointer">Enter Title Here</li>
      </>
    );
  }
};

const PageList = () => {
  return (
    <>
      <ul className="flex flex-col gap-2">
        <ListItem />
        <ListItem type={"active"} />
      </ul>
    </>
  );
};

export default PageList;
