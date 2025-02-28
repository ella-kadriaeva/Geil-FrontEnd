import {Candy} from "lucide-react";

import React from "react";
import Exemple from "../../components/exemple/Exemple";

export default function Home() {
  return (
    <div>
      <h1>Hero</h1>
      <h2>Categories Section</h2>
      <h2>Form Section</h2>
      <h2>Product Section</h2>
      <Exemple />
      <Candy size="64" color="violet" />
    </div>
  );
}
