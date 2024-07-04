import Footer from "./Footer";
import Header from "./Header";

interface ISection {
  id: string;
  title: string;
  children: React.ReactNode;
}


const Section = ({ id, title, children }: ISection) => {
  return (
    <>
      <Header mainTitle={title} />
      <main>
        <section id={id}>
          {children}
        </section>
      </main>
      <Footer />
    </>
  )
}
export default Section;
