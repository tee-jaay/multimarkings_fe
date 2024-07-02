import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Col, Container, Row } from "react-bootstrap";

import TopBar from "@/_components/layout/topbar/TopBar";
import MainHeader from "@/_components/layout/main-header/MainHeader";
import Footer from "@/_components/layout/Footer";
import MainMenu from "@/_components/layout/main-menu/MainMenu";
import Sidebar from "@/_components/layout/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_TITLE,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Top Bar */}
        <TopBar />

        {/* Main Header */}
        <MainHeader />

        {/* Main Menu */}
        <MainMenu />

        {/* Main Content */}
        <Container>
          <Row>
            <Col sm={8} md={9} className="bg-light">
              <main>
                {children}
              </main>
            </Col>
            <Col>
              <Sidebar />
            </Col>
          </Row>
        </Container>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
