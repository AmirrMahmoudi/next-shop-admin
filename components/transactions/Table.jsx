import Paginate from "../Paginate";
import { getFetch } from "@/utils/fetch";
import { numberFormat } from "@/utils/helper";

const Table = async ({ params }) => {
  const data = await getFetch(`/transactions?${params}`);

  return (
    <>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>شماره سفارش</th>
              <th>وضعیت</th>
              <th>مبلغ</th>
              <th>تاریخ ایجاد</th>
            </tr>
          </thead>
          <tbody>
            {data.transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.order_id}</td>
                <td>{transaction.status}</td>
                <td>{numberFormat(transaction.amount)} تومان</td>
                <td>{transaction.created_at}</td>
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
