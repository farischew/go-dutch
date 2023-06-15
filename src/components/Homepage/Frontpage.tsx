"use client";

import Image from "next/image";

import Button from "@/UI/Button";
import Link from "next/link";

import logo from "../../app/assets/images/icon.png";
import NewReceiptButton from "@/app/layout/NewReceiptButton";

const CLEAR_URL = "https://go-dutch-backend.herokuapp.com/clear";

export default function FrontPage() {
  const onNewReceipt = async () => {
    const response = await fetch(CLEAR_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-36">
      <Image src={logo} alt="Go-Dutch" />
      <Button onClick={onNewReceipt}>New Receipt</Button>
    </div>
  );
}
