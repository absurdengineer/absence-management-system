import Footer from "../components/Footer";
import Header from "../components/Header";
import { AppLayoutProps } from "../types/prop.types";

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-7xl my-5">{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
