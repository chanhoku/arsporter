import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { css } from "styled-system/css";
import Header from "src/app/components/header";
import Footer from "src/app/components/footer";

const notoSansJp = Noto_Sans_JP({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "アルスポーター株式会社",
  description: "アルスポーター株式会社コーポレートサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJp.className} ${css({
          color: "#333",
        })}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
