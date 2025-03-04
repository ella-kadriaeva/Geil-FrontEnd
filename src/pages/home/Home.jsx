import {Candy} from "lucide-react";

import React from "react";
import Exemple from "../../components/exemple/Exemple";
import Discount from "../../components/DiscountForm/Discount.jsx";

export default function Home() {

  return (
      <div>
        <h1>Hero</h1>
        <h2>Categories Section</h2>
        {/*<h2>Form Section</h2>*/}

        <Discount/> {/*Form Section*/}
        <h2>Product Section</h2>
        <Exemple/>
        <Candy size="64" color="violet"/>
      </div>
  );
}
