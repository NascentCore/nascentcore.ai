import Head from "next/head";
import Cover from "@/components/home/Cover";
import Description from "@/components/home/Description";
import QrCodePanel from "@/components/home/QrCodePanel";
import { Box } from "@mui/material";
import AppContainer from "@/components/home/AppContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>算想未来</title>
        <meta name="description" content="nascentcore.ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppContainer>
          <Box className="home_page_wrap">
            <Cover />
            <Description />
            <QrCodePanel />
          </Box>
        </AppContainer>
      </main>
    </>
  );
}
