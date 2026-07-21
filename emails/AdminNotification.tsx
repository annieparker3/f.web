import React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface AdminNotificationProps {
  fullName: string;
  email: string;
  program: "beta" | "ambassador";
  role: "WORKER" | "CUSTOMER" | "BOTH";
  location: string;
  trade?: string | null;
  motivation?: string | null;
  createdAt?: string;
}

export default function AdminNotificationEmail({
  fullName,
  email,
  program,
  role,
  location,
  trade,
  motivation,
  createdAt,
}: AdminNotificationProps) {
  const programName = program === "beta" ? "Beta Testing" : "Ambassador";
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : new Date().toLocaleDateString();

  return (
    <Html>
      <Head />
      <Preview>
        New {programName} signup from {fullName}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={headerText}>🔧 New Forge Registration</Text>
          </Section>

          <Section style={content}>
            <Text style={label}>Program:</Text>
            <Text style={value}>{programName}</Text>

            <Hr style={hr} />

            <Text style={label}>Registrant Details:</Text>
            <Text style={detail}>
              <strong>Name:</strong> {fullName}
            </Text>
            <Text style={detail}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={detail}>
              <strong>Role:</strong> {role}
            </Text>
            <Text style={detail}>
              <strong>Location:</strong> {location}
            </Text>

            {trade && (
              <Text style={detail}>
                <strong>Trade/Industry:</strong> {trade}
              </Text>
            )}

            {motivation && (
              <Text style={detail}>
                <strong>Why They're Interested:</strong> {motivation}
              </Text>
            )}

            <Text style={detail}>
              <strong>Signup Date:</strong> {formattedDate}
            </Text>

            <Hr style={hr} />

            <Text style={label}>Quick Actions:</Text>
            <Text style={action}>
              📧 Reply to this email to contact them directly or add them to your
              records.
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              This is an automated notification from your Forge website registration
              system.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#0A1A3C",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  color: "#FFFFFF",
};

const container = {
  margin: "0 auto",
  padding: "20px 0",
  maxWidth: "600px",
};

const header = {
  backgroundColor: "#F5760A",
  padding: "20px",
  borderRadius: "4px 4px 0 0",
};

const headerText = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
  color: "#FFFFFF",
};

const content = {
  padding: "20px",
  backgroundColor: "#132A5C",
  borderRadius: "0 0 4px 4px",
};

const label = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#F5760A",
  marginTop: "16px",
  marginBottom: "8px",
};

const value = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#FFFFFF",
  margin: "0",
};

const detail = {
  fontSize: "14px",
  color: "#F4F6FA",
  margin: "6px 0",
  lineHeight: "1.5",
};

const action = {
  fontSize: "14px",
  color: "#8FA0C2",
  fontStyle: "italic",
  margin: "12px 0",
};

const hr = {
  borderColor: "#8FA0C2",
  margin: "16px 0",
};

const footer = {
  padding: "20px",
  textAlign: "center" as const,
};

const footerText = {
  fontSize: "12px",
  color: "#8FA0C2",
  margin: "0",
};
