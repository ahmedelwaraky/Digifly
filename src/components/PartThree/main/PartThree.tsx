import TextEditor from "../editor/TextEditor";
import Footer from "../footer/Footer";
import Content from "../header/Content";
const PartThree = () => {
  return (
    <main>
      <section className="pb-8">
        <div className=" flex flex-col pt-[120px] px-[118px] gap-20">
          <Content />
          <TextEditor />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PartThree;
