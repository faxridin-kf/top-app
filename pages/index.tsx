import React from "react";
import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">hello</Htag>
      <Button apperance="primary" arrow="right">
        hello
      </Button>
      <Button apperance="ghost" arrow="down">
        hello
      </Button>
    </div>
  );
}
