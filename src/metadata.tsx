import Head from "next/head";
import React from "react";
import { MetaDataType } from "./types";

interface MetaDataProps {
  data: MetaDataType;
  favIconColor?: "purple" | "orange";
}

export default function MetaData({
  data,
  favIconColor = "orange",
}: MetaDataProps) {
  return (
    <Head>
      <title>{data.title}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`favicon-${favIconColor}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`favicon-${favIconColor}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`favicon-${favIconColor}/favicon-16x16.png`}
      />
      <link
        rel="manifest"
        href={`favicon-${favIconColor}/site.webmanifest`}
      ></link>
      <meta property="og:title" content={data.title} key="title" />
      <meta name="description" content={data.description} key="description" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={data.link} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={data.link} />
      <meta property="twitter:title" content={data.title} />
      <meta property="twitter:description" content={data.description} />
      <meta property="twitter:image" content={data.image} />

      {/* Meta Tags Generated with https://metatags.io */}
    </Head>
  );
}