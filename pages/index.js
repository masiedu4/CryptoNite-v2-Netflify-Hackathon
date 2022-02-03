/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 02/02/2022 - 22:36:25
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 02/02/2022
 * - Author          : Michael
 * - Modification    :
 **/
import Head from "next/head";
import Image from "next/image";
import Features from "../components/Features/Features";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    
    <main className="p-28 block justify-center">
      {/* Introductory Header with Logo , Name and Description of the application */}
      <Header />
      {/* Second section of all the features of the app */}
      <Features/>
    </main>
    
   
  
  );
}
