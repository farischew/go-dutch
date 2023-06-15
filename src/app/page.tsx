import { Metadata } from "next";
import Image from "next/image";

import Container from "@/UI/Container";
import Button from "@/UI/Button";
import Link from "next/link";

import logo from "./assets/images/icon.png";
import FrontPage from "@/components/Homepage/Frontpage";

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
