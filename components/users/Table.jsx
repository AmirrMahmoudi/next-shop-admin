import { getFetch } from "@/utils/fetch";
import Link from "next/link";
import Paginate from "../Paginate";

const Table = async ({ params }) => {
  const data = await getFetch(`/users?${params}`);

  return (
    <>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>نام</th>
              <th>ایمیل</th>
              <th>شماره تلفن</th>
              <th>تاریخ عضویت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.cellphone}</td>
                <td>{user.created_at}</td>
                <td>
                  <div className="d-flex">
                    <Link
                      href={`/users/${user.id}`}
                      className="btn btn-sm btn-outline me-2"
                    >
                      نمایش
                    </Link>
                    <Link
                      href={`/users/edit/${user.id}`}
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
