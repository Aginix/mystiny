import React from 'react';
import Head from 'next/head';

export interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <Head>
      <title>{title} | App</title>
    </Head>
  );
};

export default Title;
