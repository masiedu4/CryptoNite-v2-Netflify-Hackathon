/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 02/02/2022 - 23:52:46
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 02/02/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";

const Feature = ({ icon, name, desc }) => {
  return (
    <div className="md:w-1/3 p-4 border-2 m-2" id="feature">
      <p className="mb-3" > {icon}</p>
      <p className="text-2xl mb-3 font-bold opacity-75 leading-loose tracking-wider"> {name}</p>
      <p className=" text-md leading-loose tracking-wider" > {desc} </p>
    </div>
  );
};

export default Feature;
