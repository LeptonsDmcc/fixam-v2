import SeeAllButton from "@/app/components/Buttons/SeeAllButton";
import ProductTitleBar from "@/app/components/Products/ProductTitleBar";
import ProgressBar from "@/app/components/ProgressIndicators/ProgressBar";
import ShowcaseRating from "@/app/components/Reviews/ShowcaseRating";
import Space from "@/app/components/Spacing/Space";
import WriteReview from "./WriteReview";

interface Props {
  productId: string;
}

const CustomerReviews = async ({ productId }: Props) => {
  return (
    <section>
      <ProductTitleBar title="Customer Reviews" noSeeAll />
      <section className="flex flex-col md:flex-row gap-5">
        <section className=" min-w-[50%]">
          <section className="flex ">
            <div className="min-w-[40%] md:min-w-[50%] min-h-[170px] md:min-h-max">
              <header className="flex items-center gap-4">
                <p className="text-[2.2rem] md:text-[5.6rem]">4.5</p>
                <p>out of 5</p>
              </header>
              <div>
                <ShowcaseRating rating={0} />
                <Space spacing="my-4" />
                <p>2 reviews</p>
              </div>
            </div>
            <div className="min-w-[60%] md:min-w-[50%]">
              <div className=" flex flex-col justify-between h-full">
                {[1, 2, 3, 4, 5].reverse().map((v, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className=" w-12 text-center text-xs">{v} star</div>
                    <div className=" flex-grow">
                      <ProgressBar />
                    </div>
                    <div className=" w-12 text-center text-xs">{i}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Space spacing="my-6" />
          <section>
            <ul className="shadow-10-01 rounded-md py-4 px-[14px]">
              <header className="flex justify-end">
                <SeeAllButton noArrow href="" />
              </header>
              {[
                {
                  name: "Abdul Kareem Adamu",
                  text: "Exactly what i ordered for us what i get, so love konga right now.",
                },
                {
                  name: "Patrick Chukwudifu",
                  text: "Lovely, just the way it is.",
                },
              ].map((customer) => (
                <li
                  key={customer.name}
                  className="flex items-center my-6 gap-1
                  md:gap-6"
                >
                  <div
                    className=" min-h-10 min-w-10 h-10 w-10 rounded-full bg-orange-400 
                    text-white font-semibold flex items-center justify-center"
                  >
                    {customer.name[0]}
                  </div>

                  <div className="min-w-[calc(50%-2.5rem)] text-xs">
                    <p>{customer.name}</p>
                    <Space spacing=" my-2" />
                    <p className="text-gray-400">October, 1 2024</p>
                  </div>

                  <div
                    className="min-w-[calc(50%-2.5rem)] max-w-[calc(50%-2.5rem)] 
                  w-[calc(50%-2.5rem)] text-xs"
                  >
                    <ShowcaseRating rating={0} />
                    <Space spacing=" my-2" />
                    <p className="overflow-hidden line-clamp-2">
                      {customer.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="min-w-[50%]">
          <WriteReview />
        </section>
      </section>
    </section>
  );
};

export default CustomerReviews;
