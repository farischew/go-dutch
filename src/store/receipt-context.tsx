"use client";

import React, { useState } from "react";

interface FinalItem {
  price: number;
  people: [];
}

interface FinalOutput {
  [key: string]: {
    price: number;
    people: any[];
  };
}

const ReceiptContext = React.createContext({
  setItemsHandler: (loadedItems: { item: string; price: number }[]) => {},
  setFinalOutputHandler: (finalOutput: FinalOutput) => {},
  items: [],
  finalOutput: {},
});

export const ReceiptContextProvider = ({
  children,
  props,
}: {
  children: any;
  props?: any;
}) => {
  // Initialising empty array for items fetched from API
  const [items, setItems] = useState<{ item: string; price: number }[]>([]);

  const setItemsHandler = (loadedItems: { item: string; price: number }[]) => {
    setItems(loadedItems);
  };

  // Initialing Final Output
  const [finalOutput, setFinalOutput] = useState<FinalItem>();

  const setFinalOutputHandler = (finalOutput: FinalItem) => {
    setFinalOutput(finalOutput);
  };

  return (
    <ReceiptContext.Provider
      value={{
        setItemsHandler,
        setFinalOutputHandler,
        items: items,
        finalOutput: finalOutput,
      }}
      {...props}
    >
      {children}
    </ReceiptContext.Provider>
  );
};

export default ReceiptContext;
