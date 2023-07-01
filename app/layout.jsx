import '@styles/globals.css';

import Navbar from '@/components/Navbar';
import Prodiver from '@/components/Prodiver';


export const metadata = {
    title : "Promtiopa",
    description : "Discover & share AI Promps"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Prodiver>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Navbar />
            {children}
          </main>
        </Prodiver>
      </body>
    </html>
  );
}

export default RootLayout