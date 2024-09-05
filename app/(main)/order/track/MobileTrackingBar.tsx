import Image from "next/image";

const MobileTrackingBar = () => {
  return (
    <>
      <div
        className="h-[600px] mt-56 flex justify-center items-start 
      lg:hidden"
      >
        <section className=" rotate-90 translate-y-56 -translate-x-[8rem] ">
          <div className="flex w-[90%] justify-between">
            {[
              { text: "Ordered Created", date: "01/03/24" },
              { text: "Ordered Received", date: "01/03/24" },
              { text: "Order left Fixam", date: "02/03/24" },
              { text: "Order ready for collection", date: "04/03/24" },
              { text: "Delivered to Customer", date: "07/03/24" },
            ].map((p) => (
              <div
                key={p.text}
                className=" w-[12rem] text-sm  -rotate-90 
                 -translate-y-[4rem] -translate-x-8"
              >
                <p>{p.text}</p>
                <p className=" my-[6px] text-gray-400">{p.date}</p>
              </div>
            ))}
          </div>
          <div className=" h-12 bg-orange-100 rounded-3xl relative w-[80%]">
            <div className="h-12 bg-orange-400 w-[52%] rounded-3xl"></div>
            <div className=" absolute top-1/2 -translate-y-1/2 flex w-full justify-between px-2">
              {[1, 2, 3, 4, 5].map((p) => (
                <Image
                  key={p}
                  src="/assets/icons/check.svg"
                  alt=""
                  width={30}
                  height={30}
                  className=" -rotate-[100deg]"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MobileTrackingBar;
