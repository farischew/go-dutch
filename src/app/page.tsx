import { Metadata } from "next";

import Container from "@/UI/Container";

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
