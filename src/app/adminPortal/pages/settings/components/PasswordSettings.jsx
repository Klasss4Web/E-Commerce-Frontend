import React from "react";

export const PasswordSettings = () => {
  return (
    <div className="mt-3">
      <form>
        <div className="row flex-column flex-md-row">
          <div className="form-group col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="oldPassword">Old Password</label>
            <input
              type="password"
              className="form-control mt-1"
              id="oldPassword"
              placeholder="Old Password"
            />
          </div>

          <div className="form-group col-md-6 col-12">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              className="form-control mt-1"
              id="newPassword"
              placeholder="New Password"
            />
          </div>
        </div>
        <div className="row flex-column flex-md-row my-3">
          <div className="form-group col-md-6 col-12">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              id="confirm"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div className="row flex-column flex-md-row my-3">
          <div className="form-group col-md-6 col-12">
            <button>Update</button>
          </div>
        </div>
      </form>
    </div>
  );
};
