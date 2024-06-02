import { getFetch } from "@/utils/fetch";
import Link from "next/link";
import Paginate from "../Paginate";
import Image from "next/image";
import { getBlurDataURL, numberFormat } from "@/utils/helper";

const Table = async ({ params }) => {
  const data = await getFetch(`/products?${params}`);

  return (
    <>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>تصویر</th>
              <th>نام</th>
              <th>دسته بندی</th>
              <th>قیمت</th>
              <th>تعداد</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {data.products.map((product) => (
              <tr key={product.id}>
                <td>
                  <Image
                    src={product.primary_image}
                    placeholder="blur"
                    blurDataURL={getBlurDataURL()}
                    width={80}
                    height={53}
                    alt="product-image"
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{numberFormat(product.price)}</td>
                <td>{product.quantity}</td>
                <td>{product.status}</td>

                <td>
                  <div className="d-flex">
                    <Link
                      href={`/products/${product.id}`}
                      className="btn btn-sm btn-outline me-2"
                    >
                      نمایش
                    </Link>
                    <Link
                      href={`/products/edit/${product.id}`}
                      className="btn btn-sm btn-dark"
                    >
                      ویرایش
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Paginate links={data.meta.links} />
    </>
  );
};

export default Table;
