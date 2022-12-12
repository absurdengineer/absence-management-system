import Footer from "../components/Footer";
import Header from "../components/Header";
import { AppLayoutProps } from "../types/prop.types";

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
