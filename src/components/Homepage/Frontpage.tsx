"use client";

import Image from "next/image";
import { redirect } from "react-router-dom";
import Button from "@/UI/Button";
import { useRouter } from "next/router";

import logo from "../../app/assets/images/icon.png";

const CLEAR_URL = "https://go-dutch-backend.herokuapp.com/clear";

export default function FrontPage() {
  const clearCache = async () => {
    const response = await fetch(CLEAR_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    console.log(data);
  };

  const onNewReceipt = async () => {
    try {
      await clearCache();
      console.log("Success");
    } catch (error) {
      console.log("Nothing to clear");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-36">
      <Image src={logo} alt="Go-Dutch" />
      <Button onClick={onNewReceipt}>New Receipt</Button>
    </div>
  );
}
