import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export function Footer() {
  return (
    <footer className="py-[30px] bg-[#2c8d42] text-white space-y-[30px] mt-[30px]">
      <div className="w-[85%] max-w-[1300px] mx-auto flex gap-y-[20px] flex-col md:flex-row justify-between items-center">
        <section>
          <h3 className="text-[32px] font-semibold text-center">Recolam</h3>
        </section>
        <div className="flex gap-[40px]">
          <AiFillInstagram size={30} />
          <AiFillFacebook size={30} />
          <AiOutlineWhatsApp size={30} />
        </div>
        <iframe
          className="rounded-lg h-[120px] w-[190px]"
          src="https://acortar.link/nxv2Br"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="text-center w-[85%] mx-auto space-y-[20px]">
        <div className="w-full bg-white h-[2px]"></div>
        <div>
          <p>copyright 2023</p>
          <p>Politica de privacidad</p>
        </div>
      </div>
    </footer>
  );
}
