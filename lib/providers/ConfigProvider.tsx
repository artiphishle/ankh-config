"use client";
import { type PropsWithChildren, useState } from "react";
import { IAnkhCmsConfig } from 'ankh-types';
import { AnkhCmsConfigContext, getConfig } from "../contexts/ConfigContext";

export function AnkhCmsConfigProvider({ children }: PropsWithChildren) {
  const [config] = useState<IAnkhCmsConfig>(getConfig());

  return (
    <>
      <AnkhCmsConfigContext.Provider value={config}>
        {children}
      </AnkhCmsConfigContext.Provider>
    </>
  );
}