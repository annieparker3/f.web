import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

interface BetaWelcomeEmailProps {
  fullName: string;
  email: string;
  role: "WORKER" | "CUSTOMER" | "BOTH";
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://forge.app";

const roleLabel = {
  WORKER: "Skilled Worker",
  CUSTOMER: "Hiring Customer",
  BOTH: "Worker & Customer",
};

export default function BetaWelcomeEmail({
  fullName,
  email,
  role,
}: BetaWelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Welcome to the Forge Beta Program, {fullName}! Your access token is on its way.
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
          <Heading style={h1}>You&apos;re on the list, {fullName}!</Heading>

          <Text style={bodyText}>
            Thank you for applying to the <strong style={highlight}>Forge Beta Testing Program</strong>. 
            We have received your application and our team is reviewing it now.
          </Text>

          {/* Info Card */}
          <Section style={card}>
            <Row>
              <Column style={cardLabelCol}>
                <Text style={cardLabel}>Program</Text>
              </Column>
              <Column>
                <Text style={cardValue}>Beta Testing Program</Text>
              </Column>
            </Row>
            <Row>
              <Column style={cardLabelCol}>
                <Text style={cardLabel}>Role</Text>
              </Column>
              <Column>
                <Text style={cardValue}>{roleLabel[role]}</Text>
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
            What Happens Next
          </Heading>

          <Section>
            <Row style={stepRow}>
              <Column style={stepNumCol}>
                <Text style={stepNum}>1</Text>
              </Column>
              <Column>
                <Text style={stepTitle}>Application Review</Text>
                <Text style={stepBody}>
                  Our team reviews submissions within <strong>48 hours</strong> to balance trade categories and regional coverage.
                </Text>
              </Column>
            </Row>
            <Row style={stepRow}>
              <Column style={stepNumCol}>
                <Text style={stepNum}>2</Text>
              </Column>
              <Column>
                <Text style={stepTitle}>Onboarding Invitation</Text>
                <Text style={stepBody}>
                  Accepted applicants receive a second email with their secure app download token and setup guide.
                </Text>
              </Column>
            </Row>
            <Row style={stepRow}>
              <Column style={stepNumCol}>
                <Text style={stepNum}>3</Text>
              </Column>
              <Column>
                <Text style={stepTitle}>Earn Your Rewards</Text>
                <Text style={stepBody}>
                  Participate in testing, complete our feedback surveys, and unlock your <strong>$100 platform credit</strong> at launch.
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          <Section style={{ textAlign: "center" as const }}>
            <Button style={ctaButton} href={`${baseUrl}/how-it-works`}>
              Learn How Forge Works
            </Button>
          </Section>

          <Text style={footerNote}>
            Questions? Reply to this email or reach us at{" "}
            <a href="mailto:support@forge.app" style={link}>
              support@forge.app
            </a>
          </Text>
        </Container>

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerText}>
            © {new Date().getFullYear()} Forge Technologies Inc. · All rights reserved.
          </Text>
          <Text style={footerText}>
            You received this email because you applied to the Forge Beta Program.
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
