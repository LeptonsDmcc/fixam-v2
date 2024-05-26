import Button from "@/app/components/Buttons/Button";
import InputGroup from "@/app/components/Inputs/InputGroup";
import SelectInput from "@/app/components/Inputs/SelectInput";
import Space from "@/app/components/Space";

const ReviewSpace = () => <Space spacing="my-4" />;
const WriteReview = () => {
  return (
    <div>
      <h5 className=" text-base font-semibold">Write a Review</h5>
      <ReviewSpace />
      <form action="">
        <InputGroup label="Rating">
          <SelectInput />
        </InputGroup>
        <ReviewSpace />
        <InputGroup label="Review">
          <textarea
            name="review"
            id="Review"
            placeholder="Leave a Review"
            className=" h-[200px] rounded-lg border px-4 py-3 w-full resize-none"
          />
        </InputGroup>
        <ReviewSpace />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default WriteReview;
