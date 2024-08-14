import AccountSpacing from "../../components/Spacing/AccountSpacing";
import BaseSpacing from "../../components/Spacing/BaseSpacing";
import AccountHeader from "../components/AccountHeader";
import SavedItem from "./SavedItem";
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
