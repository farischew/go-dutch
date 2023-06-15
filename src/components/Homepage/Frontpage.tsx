"use client";

import Image from "next/image";

import Button from "@/UI/Button";

import logo from "../../app/assets/images/icon.png";

const CLEAR_URL = "https://go-dutch-backend.herokuapp.com/clear";

export default function FrontPage() {
  function redirectToNewReceipt() {
    window.location.href = "/newreceipt"; // Replace '/' with the desired root page URL
  }

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
      console.log("All cleared");
      redirectToNewReceipt();
    } catch (error) {
      console.log("Nothing to clear");
      redirectToNewReceipt();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-36">
      <Image src={logo} alt="Go-Dutch" />
      <Button onClick={onNewReceipt}>New Receipt</Button>
    </div>
  );
}
