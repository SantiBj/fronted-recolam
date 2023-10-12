export function ModalGeneric({
  content,
  isOpen,
}) {
  

  return (
    <div
      className={`${
        !isOpen && "hidden transition-all"
      } fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-20 bg-[#000000c2]`}
    >
      <div
        className={`bg-white w-[50%] h-[40vh] max-w-[500px] max-h-[400px] rounded-2xl`}
      >
        {content}
      </div>
      </div>
  );
}
