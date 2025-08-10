import { ProductProvider } from '../components/ProductContext';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <ProductProvider>
          {children}
        </ProductProvider>
      </body>
    </html>
  );
}
