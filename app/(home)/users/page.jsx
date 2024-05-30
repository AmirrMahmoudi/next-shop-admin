import Loading from "@/components/Loading";
import Table from "@/components/users/Table";
import Link from "next/link";
import { Suspense } from "react";

const UsersPage = ({ serachParams }) => {
  const params = new URLSearchParams(serachParams);
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">کاربران</h4>
        <Link href={"/users/create"} className="btn btn-sm btn-outline-dark">
          ایجاد کاربر
        </Link>
      </div>
      <Suspense key={params.toString()} fallback={<Loading />}>
        <Table params={params.toString()} />
      </Suspense>
    </>
  );
};

export default UsersPage;
