import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import Image from "next/image";

const TrackingBar = () => {
  return (
    <section className="hidden lg:block">
      <div className=" h-12 bg-orange-100 rounded-3xl relative">
        <div className="h-12 bg-orange-400 w-[52%] rounded-3xl"></div>
        <div className=" absolute top-1/2 -translate-y-1/2 flex w-full justify-between px-2">
          {[1, 2, 3, 4, 5].map((p) => (
            <Image
              key={p}
              src="/assets/icons/check.svg"
              alt=""
              width={30}
              height={30}
            />
          ))}
        </div>
      </div>
      <ContentSpacing />
      <div className="flex w-full justify-between">
        {[
          { text: "Ordered Created", date: "01/03/24" },
          { text: "Ordered Received", date: "01/03/24" },
          { text: "Order left Fixam", date: "02/03/24" },
          { text: "Order ready for collection", date: "04/03/24" },
          { text: "Delivered to Customer", date: "07/03/24" },
        ].map((p) => (
          <div key={p.text} className=" w-24 text-sm text-center">
            <p>{p.text}</p>
            <p className=" my-[6px] text-gray-400">{p.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrackingBar;
