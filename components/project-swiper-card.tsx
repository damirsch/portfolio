import Image from "next/image";

interface IProjectSwiperCard {
  bgImg?: string;
  icoImg?: string;
  mainTitle?: string;
  mainSubTitle?: string;
  secondTitle?: string;
  secondSubTitle?: string;
}

export default function ProjectSwiperCard({
  bgImg = "/covers/1.png",
  icoImg = "/Main.svg",
  mainTitle = "Design projects",
  mainSubTitle = "Replace with cover",
  secondTitle = "Design",
  secondSubTitle = "My design projects",
}: IProjectSwiperCard) {
  return (
    <div className="slider-card cursor-pointer relative max-w-[760px] p-2 rounded-[40px] overflow-hidden">
      <div className="flex flex-col justify-center relative min-h-[376px] rounded-[32px]">
        <div
          style={{
            backgroundImage: `url('${bgImg}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute top-0 left-0 z-20 w-full h-full size-5 rounded-[32px]"
        ></div>
        <div className="absolute size-full z-10 bg-[#01071A] rounded-[32px]"></div>
        <div className="flex flex-col items-center relative z-30">
          <h3 className="font-black text-[80px]">{mainTitle}</h3>
          <p className="text-secondary-foreground text-2xl mt-1">
            {mainSubTitle}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6 px-10 py-3">
        <div className="size-8">
          <Image src={icoImg} alt="icon" fill />
        </div>
        <div>
          <p className="text-lg">{secondTitle}</p>
          <p className="text-base text-secondary-foreground">
            {secondSubTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
