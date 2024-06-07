import CreateProduct from "@/components/products/Create";
import { getFetch } from "@/utils/fetch";

const CreateProductPage = async () => {
  const categories = await getFetch("/categories-list");


  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">ایجاد محصول</h4>
      </div>

      <CreateProduct categories={categories} />
    </>
  );
};
export default CreateProductPage;
