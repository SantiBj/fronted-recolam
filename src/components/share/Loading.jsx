import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loading() {
  return (
    <div className="bg-[#0000009d] fixed top-0 left-0 bottom-0 right-0 z-30 flex justify-center items-center text-white">
      <div className="w-fit animate-spin">
        <AiOutlineLoading3Quarters size={60} />
      </div>
    </div>
  );
}
