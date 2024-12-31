// import Form from "./Form";
import Table from "../table/Table";
import Content from "../switch/Content";
import Form from "../form/Form";
import Header from "../header/Header";

const PartOne = () => {
  return (
    <section>
      <Header />
      <main className=" part-one py-8">
        <div className="container mx-auto ">
          <section className=" flex flex-col pt-[208px] px-20 gap-20 ">
            <Content />
            <div className="flex justify-between">
              <Form />
              <Table />
            </div>
          </section>
        </div>
      </main>
    </section>
  );
};

export default PartOne;
