import SeeAllButton from "@/app/components/Buttons/SeeAllButton";
import ProductTitleBar from "@/app/components/Products/ProductTitleBar";
import ProgressBar from "@/app/components/ProgressIndicators/ProgressBar";
import ShowcaseRating from "@/app/components/Reviews/ShowcaseRating";
import Space from "@/app/components/Spacing/Space";
import WriteReview from "./WriteReview";

const CustomerReviews = () => {
  return (
    <section>
      <ProductTitleBar title="Customer Reviews" noSeeAll />
      <section className="flex flex-col md:flex-row gap-5">
        <section className=" min-w-[50%]">
          <section className="flex">
            <div className=" min-w-[50%]">
              <header className="flex items-center gap-4">
                <p className=" text-[5.6rem]">4.5</p>
                <p>out of 5</p>
              </header>
              <div>
                <ShowcaseRating />
                <Space spacing="my-4" />
                <p>2 reviews</p>
              </div>
            </div>
            <div className=" min-w-[50%]">
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
                <SeeAllButton noArrow />
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
                  className="flex items-center gap-6 my-6 "
                >
                  <div
                    className=" h-10 w-10 rounded-full bg-orange-400 text-white font-semibold
                flex items-center justify-center "
                  >
                    {customer.name[0]}
                  </div>
                  <div className=" text-xs">
                    <p>{customer.name}</p>
                    <Space spacing=" my-2" />
                    <p className="text-gray-400">October, 1 2024</p>
                  </div>

                  <div className=" text-xs ">
                    <ShowcaseRating />
                    <Space spacing=" my-2" />
                    <p>{customer.text}</p>
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
