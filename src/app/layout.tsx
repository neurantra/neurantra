import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neurantra | AI Assistants For High-Trust Teams",
  description:
    "Neurantra is building domain-specific AI assistants, with IyerSpine as the first live proof point in healthcare.",
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
