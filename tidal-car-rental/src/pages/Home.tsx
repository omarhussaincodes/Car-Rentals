import { Footer } from "../layouts/footer/Footer";
import { Header } from "../layouts/header/Header";

interface Props {}

export const Home = (props: Props) => {
  return (
    <>
      <Header />
      <div className="--input-background-color-special">
        <h1>Home</h1>
      </div>
      <Footer />
    </>
  );
};
