import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
export const metadata: Metadata = {
    title: "Carstoc - Автозапчасти",
    description: "Магазин автозапчастей с удобным поиском",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body className="bg-gray-100">
        <Header />
        <main className="container mx-auto p-8">{children}</main>
        </body>
        </html>
    );
}
