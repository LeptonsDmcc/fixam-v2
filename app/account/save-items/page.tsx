import AccountSpacing from "@/app/components/Spacing/AccountSpacing";
import AccountHeader from "../components/AccountHeader";
import SavedItem from "./SavedItem";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import { Fragment } from "react";

const SaveItemsPage = () => {
  return (
    <section>
      <AccountHeader>Saved Items</AccountHeader>
      <AccountSpacing />
      {[1, 2].map((s) => (
        <Fragment key={s}>
          <SavedItem />
          <BaseSpacing />
        </Fragment>
      ))}
    </section>
  );
};

export default SaveItemsPage;
