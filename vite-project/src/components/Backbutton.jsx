import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
export default function Backbutton() {
  const nav = useNavigate();
  return (
    <div>
      <Button
        type="back"
        onClick={(e) => {
          e.preventDefault();
          nav(-1);
        }}
      >
        &larr;back
      </Button>
    </div>
  );
}
