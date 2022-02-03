/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 02/02/2022 - 22:58:47
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 02/02/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";

const Header = () => {
  return (
    <main className="mb-16">
      {/* <p className="flex justify-center">
        {" "}
        <img
          src="https://elmerlar.sirv.com/CryptoNite%20(2).svg"
          alt=""
          width={500}
          height={500}
        />{" "}
      </p> */}
      <p className="text-7xl flex justify-center " id="header-name">
        {" "}
        CryptoNite.{" "}
      </p>
      <p className="flex text-2xl mb-3 leading-loose tracking-wider mt-5 justify-center font-bold opacity-75" id="header-desc">
        {" "}
        Your All-in-One Blockchain Utility Application.{" "}
      </p>
    </main>
  );
};

export default Header;
