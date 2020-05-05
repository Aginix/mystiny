import React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <Head>
      <title>{title} | App</title>
    </Head>
  );
};

export default Title;
