import React from "react";
import Navbar from "./Navbar";
import { ThemeProvider } from "./ThemeProvider";

// Metadata can be added as a part of <head> using React Helmet
import { Helmet } from "react-helmet";

export default function RootLayout({ children }) {
  return (
    <div lang="en" className="min-h-screen bg-background text-foreground">
      {/* Metadata setup */}
      <Helmet>
        <title>AI Finance Automation</title>
        <meta
          name="description"
          content="Manage your finances with AI-powered insights"
        />
      </Helmet>

      {/* Theme provider setup */}
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Navbar />
        <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </ThemeProvider>
    </div>
  );
}
