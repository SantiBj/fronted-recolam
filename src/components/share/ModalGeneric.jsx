export function ModalGeneric({ content, isOpen }) {
  return (
    <div
      className={`${
        !isOpen && "hidden transition-all"
      } fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-20 bg-black`}
    >
      <div className="bg-white w-[50%] h-[40vh]">{content}</div>
    </div>
  );
}
