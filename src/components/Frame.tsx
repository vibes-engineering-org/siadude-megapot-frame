"use client";

import React, { useEffect } from "react";
import { useFrameSDK } from "~/hooks/useFrameSDK";
import { Button } from "./ui/button";

const forwardUrl = "https://megapot.io?referral=kQifFxRm";

export default function Frame() {
  const { sdk } = useFrameSDK();

  useEffect(() => {
    if (sdk && forwardUrl) {
      sdk.actions.openUrl(forwardUrl);
    }
  }, [sdk]);

  return (
    <div className="container flex flex-col mx-auto p-6 max-w-lg gap-4">
      <p className="text-center ">Redirecting to {forwardUrl}</p>
      <Button
        className="text-2xl font-bold"
        size="lg"
        onClick={() => window.location.replace(forwardUrl)}
      >
        Continue
      </Button>
    </div>
  );
}
