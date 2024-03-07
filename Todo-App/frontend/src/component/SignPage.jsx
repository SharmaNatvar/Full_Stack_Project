import React from "react";

const SignPage = () => {
  return (
    <>
      <div className="container" >
      <div>
      </div>
        <div style={{ height: "90vh" }} className="d-flex flex-column align-items-center">
        <h2 className="m-5">SignUp</h2>
          <form className="p-4 border border-info-subtle rounded" style={{maxWidth:'400px' }}>
            <div className="mb-3">
              <label className="form-label">
                UserName
              </label>
              <input
                type="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
              />
            </div>

            <div className="form-text mb-3">
                We'll never share your Details with anyone else.
              </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignPage;
