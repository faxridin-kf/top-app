import React, { useEffect, useState } from 'react';
import { Button, Htag, Paragraph, Raiting, Tag } from '../components';
import { Layout, withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [raiting, setraiting] = useState<number>(0);
  useEffect(() => {
    console.log(' count ' + count);
    return function cleanup() {
      console.log('unmont');
    };
  }, [count]);

  return (
    <Layout>
      <Htag tag="h1">hello</Htag>
      <Button apperance="primary" arrow="right">
        hello
      </Button>
      <Button apperance="ghost" arrow="down">
        hello
      </Button>
      <Paragraph size="s" onClick={() => setCount(count + 1)}>
        {count} hello this is paragraph
      </Paragraph>
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
      <Raiting raiting={raiting} isEditible setraiting={setraiting} />
    </Layout>
  );
}
export default withLayout(Home);