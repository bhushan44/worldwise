import React from "react";
import { useSearchParams } from "react-router-dom";

export default function useUrlPosition() {
  const [searchparams, setsearchparams] = useSearchParams();
  let maplat = searchparams.get("lat");
  let maplng = searchparams.get("lng");
  return [maplat, maplng];
}
