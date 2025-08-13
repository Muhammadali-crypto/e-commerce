import { ProductProvider } from '../components/ProductContext';
import { AuthProvider } from '../components/AuthContext'; // добавим

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <AuthProvider>
          <ProductProvider>
            {children}
          </ProductProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
