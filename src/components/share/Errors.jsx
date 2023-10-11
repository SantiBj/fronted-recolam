import { MdOutlineErrorOutline } from "react-icons/md";

export function Errors({ message }) {
  return (
    <div className="border-[2px] rounded-lg bg-white h-[35vh] min-h-[350px] w-[30%] mx-auto min-w-[290px] flex flex-col gap-[20px] justify-center items-center">
      <div className="text-red-500">
        <MdOutlineErrorOutline size={50} />
      </div>
      <div className="text-center">{message}</div>
    </div>
  );
}
