import { Metadata } from "next";
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://n15-dashboard.vercel.app"),
  alternates: {
    canonical: "https://n15-dashboard.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
