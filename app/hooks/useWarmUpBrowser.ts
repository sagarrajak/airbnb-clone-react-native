import React, { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";

export default function useWarmUpBrowser() {
  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);
}
