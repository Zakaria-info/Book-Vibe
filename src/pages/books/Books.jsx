import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../components/shared/navbar/listedBooks/ListedReadList";
import ListedWishList from "../../components/shared/navbar/listedBooks/ListedWishList";

const Books = () => {
  const { storedBooks, wishlist } = useContext(BookContext);
  console.log(storedBooks, wishlist, "bookContext");

  return (
    <div className="container mx-auto my-3">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList/>
        </TabPanel>
        <TabPanel>
          <ListedWishList/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
