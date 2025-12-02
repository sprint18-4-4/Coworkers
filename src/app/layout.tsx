import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import QueryProviders from "../providers";
import ToasterContainer from "@/lib/toaster";
import { Sidebar } from "@/common";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Coworkers",
  description: "팀원들과 함께하는 일정 관리 서비스. 함께 일정을 계획하고 관리해보세요.",
  openGraph: {
    title: "Coworkers",
    description: "팀원들과 함께하는 일정 관리 서비스. 함께 일정을 계획하고 관리해보세요.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body className="flex flex-col tablet:flex-row pc:flex-row">
        <QueryProviders>
          <Sidebar />
          <main className="flex-1 min-w-0 bg-background-secondary">{children}</main>
          <ToasterContainer />
        </QueryProviders>
        <div id="portal-root" />
      </body>
    </html>
  );
}
