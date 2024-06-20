import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Col, Container, Row } from "react-bootstrap";

import TopBar from "@/_components/layout/topbar/TopBar";
import MainHeader from "@/_components/layout/main-header/MainHeader";
import Aside from "@/_components/layout/Aside";
import Footer from "@/_components/layout/Footer";

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
        <Container fluid className="bg-secondary">
          <Container>
            <Row>
              <div id="main_menu" className="bg-info p-0">main menu</div>
            </Row>
          </Container>
        </Container>

        {/* Main Content */}
        <Container>
          <Row>
            <Col sm={8} md={9} className="bg-light">
              <main>
                {children}
              </main>
            </Col>
            <Col className="bg-secondary">
              <Aside />
            </Col>
          </Row>
        </Container>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
