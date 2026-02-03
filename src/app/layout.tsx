import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chef Sam - O Sabor Ancestral de Camarões",
  description: "Experiência Imersiva de Gastronomia Africana Autêntica em São Paulo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
