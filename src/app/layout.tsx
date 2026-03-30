import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neurantra | AI Assistants For High-Trust Teams",
  description:
    "Neurantra designs domain-specific AI assistants for health practices, commerce teams, and endurance communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
