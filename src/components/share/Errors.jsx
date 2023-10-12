import { MdOutlineErrorOutline } from "react-icons/md";

export function Errors({ message }) {
  return (
    <div className="bg-white h-[30vh] min-h-[300px] w-[30%] mx-auto min-w-[290px] flex flex-col gap-[20px] justify-center items-center">
      <div className="text-red-500">
        <MdOutlineErrorOutline size={50} />
      </div>
      <div className="text-center">{message}</div>
    </div>
  );
}
