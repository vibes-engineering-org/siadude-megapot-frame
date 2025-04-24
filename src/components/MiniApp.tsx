"use client";

import { useFrameSDK } from "~/hooks/useFrameSDK";
import Frame from "./Frame";

export default function MiniApp() {
  const { isSDKLoaded } = useFrameSDK();

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return <Frame />;
}
