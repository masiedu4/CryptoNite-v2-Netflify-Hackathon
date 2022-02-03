/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 02/02/2022 - 23:41:58
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 02/02/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";
import { data } from "./data";
import Feature from "./Feature";

const Features = () => {
  return (
    <main className="flex grid-rows-3">
      {data.map((data) => {
        return (
          <Feature
            key={data.id}
            name={data.name}
            icon={data.icon}
            desc={data.desc}
          />
        );
      })}
    </main>
  );
};

export default Features;
