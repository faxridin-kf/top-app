import React from "react";
import { Button, Htag, Paragraph, Tag } from '../components';

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
      <Paragraph size="s"> hello this is paragraph</Paragraph>
      <Tag size="medium" color="red">
        red
      </Tag>
      <Tag size="medium" color="grey">
        red
      </Tag>
      <Tag size="medium" color="green">
        red
      </Tag>
      <Tag size="medium" color="ghost">
        red
      </Tag>
      <Tag size="medium" color="primary">
        red
      </Tag>
    </div>
  );
}
