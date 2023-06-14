import NewReceipt from "@/components/NewReceipt";
import { ReceiptContextProvider } from "@/store/receipt-context";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go Dutch - New Receipt",
  description: 'Capture, Split, and Share: Your Receipt Splitting Revolution!"',
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
  },
};

const NewReceiptPage = () => {
  return (
    <ReceiptContextProvider>
      <NewReceipt />
    </ReceiptContextProvider>
  );
};

export default NewReceiptPage;
