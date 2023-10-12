export function TitleMajor({ text,color="white",size="lg" }) {
  return <h2 className={`text-center text-${color} ${size == "lg" && "text-[32px]"} ${size == "md" && "text-[28px]"} ${size == "sm" && "text-[25px]"} font-bold`}>{text}</h2>;
}
