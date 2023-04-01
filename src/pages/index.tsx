import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>nascentcore.ai</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div className="nai_home_cove">
            <Image
              width={1200}
              height={720}
              className="nai_home_cove_img"
              src="/assets/home_cover_bg.jpg"
              alt={""}
            />
          </div>
          <div className="nai_home_desc_wrap">
            <div className="nai_home_cove_text nai_home_cove_text_1">
              媲美 Google、OpenAI 的大模型算力软件平台，支持千卡 nVidia A100
              集群
            </div>
            <div className="nai_home_cove_text">
              诚邀深度学习领域专家加入我们
            </div>
            <div className="nai_home_cove_text" style={{ marginBottom: 0 }}>
              敬请关注
            </div>
          </div>
          <div className="nai_home_qr_wrap">
            <Image
              width={300}
              height={360}
              className="nai_home_qr_img"
              src="/assets/join_qr.png"
              alt=""
            />
            <Image
              width={300}
              height={360}
              className="nai_home_qr_img"
              src="/assets/follow_qr.png"
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  );
}
