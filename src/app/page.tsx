import { Metadata } from "next";
import Image from "next/image";

import Container from "@/UI/Container";
import Button from "@/UI/Button";
import Link from "next/link";

import logo from "./assets/images/icon.png";
import { useCallback } from "react";
import FrontPage from "@/components/Homepage/Frontpage";

const CLEAR_URL = "https://go-dutch-backend.herokuapp.com/clear";

export const metadata: Metadata = {
  title: "Go Dutch",
  description: 'Capture, Split, and Share: Your Receipt Splitting Revolution!"',
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
  },
};

export default function Home() {
  return (
    <Container>
      <FrontPage />
    </Container>
  );
}
