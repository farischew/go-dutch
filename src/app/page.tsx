import { Metadata } from "next";

import Container from "@/UI/Container";
import Button from "@/UI/Button";
import Link from "next/link";

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
      <div className="place-content-center">
        <h1>This is the front page</h1>
        <Link href="/newreceipt">
          <Button>New Receipt</Button>
        </Link>
      </div>
    </Container>
  );
}
