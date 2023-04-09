import "./globals.css"

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    //
    <html data-theme="coffee" lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}