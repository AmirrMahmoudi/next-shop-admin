import { getFetch } from "@/utils/fetch";

const UserPage = async ({ params }) => {
  const user = await getFetch(`/users/${params.id}`);

  console.log(user);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">کاربر : {user.name}</h4>
      </div>

      <form className="row gy-4">
        <div className="col-md-3">
          <label className="form-label">نام</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={user.name}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">ایمیل</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={user.email}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">شماره تماس</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={user.cellphone}
          />
        </div>

        <div>
          <button className="btn btn-dark mt-3">حذف</button>
        </div>
      </form>
    </>
  );
};

export default UserPage;
