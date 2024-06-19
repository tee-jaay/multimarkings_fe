import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Col, Container, Row, Stack } from "react-bootstrap";

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
        <Container className="bg-info" fluid>
          <Container>
            <Row id="topbar" className="">
              <Stack direction="horizontal" className="p-0">
                <div id="socials">
                  socials
                </div>
                <div id="user_menu" className="ms-auto">dropdown menu</div>
              </Stack>
            </Row>
          </Container>
        </Container>

        {/* Main Header */}
        <Container fluid className="bg-dark text-light">
          <Container>
            <Row>
              <Stack direction="horizontal" id="header" className="bg-danger p-0">
                <div id="logo">logo</div>
                <div id="banner_wide" className="ms-auto">banner wide</div>
              </Stack>
            </Row>
          </Container>
        </Container>

        {/* Main Menu */}
        <Container fluid className="bg-secondary">
          <Container>
            <Row>
              <div id="main_menu" className="bg-info p-0">main menu</div>
            </Row>
          </Container>
        </Container>

        <Container>
          <Row>
            <Col sm={8} md={9} className="bg-light">
              <main>
                {children}
              </main>
            </Col>
            <Col className="bg-secondary">
              sidebar
            </Col>
          </Row>
        </Container>
        <Container fluid className="bg-warning">
          <Container>
            <Row>
              <div id="footer" className="p-0">
                footer
              </div>
            </Row>
          </Container>
        </Container>
      </body>
    </html>
  );
}
