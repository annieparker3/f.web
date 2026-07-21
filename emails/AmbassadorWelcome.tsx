import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

interface AmbassadorWelcomeEmailProps {
  fullName: string;
  email: string;
  location: string;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://forge.app";

export default function AmbassadorWelcomeEmail({
  fullName,
  email,
  location,
}: AmbassadorWelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Welcome to the Forge Ambassador Program, {fullName}! Your community journey starts here.
      </Preview>
      <Body style={main}>
        {/* Header */}
        <Section style={header}>
          <Container style={headerContainer}>
            <Text style={logoText}>⚙ FORGE</Text>
            <Text style={tagline}>Built for Work. Made for You.</Text>
          </Container>
        </Section>

        {/* Body */}
        <Container style={container}>
          <Heading style={h1}>Welcome aboard, {fullName}!</Heading>

          <Text style={bodyText}>
            Your application to the{" "}
            <strong style={highlight}>Forge Ambassador Program</strong> has been received.
            We are excited about your interest in building the Forge community in{" "}
            <strong style={highlight}>{location}</strong>.
          </Text>

          {/* Info Card */}
          <Section style={card}>
            <Row>
              <Column style={cardLabelCol}>
                <Text style={cardLabel}>Program</Text>
              </Column>
              <Column>
                <Text style={cardValue}>Ambassador Program</Text>
              </Column>
            </Row>
            <Row>
              <Column style={cardLabelCol}>
                <Text style={cardLabel}>Region</Text>
              </Column>
              <Column>
                <Text style={cardValue}>{location}</Text>
              </Column>
            </Row>
            <Row>
              <Column style={cardLabelCol}>
                <Text style={cardLabel}>Email</Text>
              </Column>
              <Column>
                <Text style={cardValue}>{email}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          <Heading as="h2" style={h2}>
            Your Benefits as an Ambassador
          </Heading>

          <Section style={benefitsList}>
            <Row style={benefitRow}>
              <Column style={bulletCol}><Text style={bullet}>→</Text></Column>
              <Column><Text style={benefitText}><strong style={{ color: "#FFFFFF" }}>10% recurring referral commission</strong> for 6 months on every worker or customer you bring aboard.</Text></Column>
            </Row>
            <Row style={benefitRow}>
              <Column style={bulletCol}><Text style={bullet}>→</Text></Column>
              <Column><Text style={benefitText}><strong style={{ color: "#FFFFFF" }}>Exclusive Forge Ambassador swag</strong> — branded hoodies, decals, and promotional brochures shipped to you.</Text></Column>
            </Row>
            <Row style={benefitRow}>
              <Column style={bulletCol}><Text style={bullet}>→</Text></Column>
              <Column><Text style={benefitText}><strong style={{ color: "#FFFFFF" }}>Local lead status</strong> at Forge launch events in your city — represent the brand publicly.</Text></Column>
            </Row>
          </Section>

          <Hr style={divider} />

          <Heading as="h2" style={h2}>
            What Happens Next
          </Heading>

          <Section>
            <Row style={stepRow}>
              <Column style={stepNumCol}>
                <Text style={stepNum}>1</Text>
              </Column>
              <Column>
                <Text style={stepTitle}>Application Review (48hrs)</Text>
                <Text style={stepBody}>
                  Our Community Director will review your application and background to ensure a great local fit.
                </Text>
              </Column>
            </Row>
            <Row style={stepRow}>
              <Column style={stepNumCol}>
                <Text style={stepNum}>2</Text>
              </Column>
              <Column>
                <Text style={stepTitle}>Brief Alignment Call</Text>
                <Text style={stepBody}>
                  If accepted, expect a 15-minute video call to align on your local growth strategy and goals.
                </Text>
              </Column>
            </Row>
            <Row style={stepRow}>
              <Column style={stepNumCol}>
                <Text style={stepNum}>3</Text>
              </Column>
              <Column>
                <Text style={stepTitle}>Onboard & Start Earning</Text>
                <Text style={stepBody}>
                  Receive your personal referral dashboard link, promotional materials, and welcome package.
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          <Section style={{ textAlign: "center" as const }}>
            <Button style={ctaButton} href={`${baseUrl}/ambassador`}>
              View Ambassador Program Details
            </Button>
          </Section>

          <Text style={footerNote}>
            Questions? Reply to this email or reach us at{" "}
            <a href="mailto:community@forge.app" style={link}>
              community@forge.app
            </a>
          </Text>
        </Container>

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerText}>
            © {new Date().getFullYear()} Forge Technologies Inc. · All rights reserved.
          </Text>
          <Text style={footerText}>
            You received this email because you applied to the Forge Ambassador Program.
          </Text>
        </Section>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#0A1A3C",
  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
};

const header = {
  backgroundColor: "#0A1220",
  borderBottom: "1px solid #132A5C",
};

const headerContainer = {
  maxWidth: "580px",
  margin: "0 auto",
  padding: "24px 32px",
};

const logoText = {
  fontSize: "22px",
  fontWeight: "900",
  color: "#FFFFFF",
  margin: "0",
  letterSpacing: "3px",
};

const tagline = {
  fontSize: "11px",
  color: "#8FA0C2",
  margin: "4px 0 0 0",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
};

const container = {
  maxWidth: "580px",
  margin: "0 auto",
  padding: "40px 32px",
};

const h1 = {
  color: "#FFFFFF",
  fontSize: "28px",
  fontWeight: "900",
  lineHeight: "1.2",
  margin: "0 0 20px 0",
};

const h2 = {
  color: "#FFFFFF",
  fontSize: "18px",
  fontWeight: "700",
  margin: "0 0 16px 0",
};

const bodyText = {
  color: "#8FA0C2",
  fontSize: "15px",
  lineHeight: "1.7",
  margin: "0 0 24px 0",
};

const highlight = {
  color: "#F5760A",
};

const card = {
  backgroundColor: "#132A5C",
  borderRadius: "12px",
  padding: "20px 24px",
  marginBottom: "24px",
  border: "1px solid #1e3a6e",
};

const cardLabelCol = {
  width: "100px",
};

const cardLabel = {
  color: "#8FA0C2",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  margin: "4px 0",
};

const cardValue = {
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: "600",
  margin: "4px 0",
};

const divider = {
  borderColor: "#132A5C",
  margin: "28px 0",
};

const benefitsList = {
  marginBottom: "8px",
};

const benefitRow = {
  marginBottom: "12px",
};

const bulletCol = {
  width: "28px",
};

const bullet = {
  color: "#F5760A",
  fontSize: "16px",
  fontWeight: "700",
  margin: "0",
};

const benefitText = {
  color: "#8FA0C2",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0",
};

const stepRow = {
  marginBottom: "16px",
};

const stepNumCol = {
  width: "44px",
};

const stepNum = {
  backgroundColor: "#F5760A",
  color: "#FFFFFF",
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  fontSize: "13px",
  fontWeight: "900",
  textAlign: "center" as const,
  lineHeight: "28px",
  margin: "0",
  display: "inline-block",
};

const stepTitle = {
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: "700",
  margin: "0 0 4px 0",
};

const stepBody = {
  color: "#8FA0C2",
  fontSize: "13px",
  lineHeight: "1.6",
  margin: "0",
};

const ctaButton = {
  backgroundColor: "#F5760A",
  borderRadius: "100px",
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: "700",
  padding: "14px 32px",
  textDecoration: "none",
  letterSpacing: "0.5px",
};

const footerNote = {
  color: "#8FA0C2",
  fontSize: "13px",
  textAlign: "center" as const,
  marginTop: "28px",
};

const link = {
  color: "#F5760A",
  textDecoration: "underline",
};

const footer = {
  backgroundColor: "#0A1220",
  borderTop: "1px solid #132A5C",
  padding: "24px 32px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#8FA0C2",
  fontSize: "12px",
  margin: "4px 0",
};
