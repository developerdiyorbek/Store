import React from "react";

const UserInformation = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  return (
    <div className="w-full">
      <h4 className="text-[24px] loading-[18px] tracking-[0.2px] py-4">
        UserInformation
      </h4>
      <div className="w-full rounded border p-3">
        <div>
          <h2 className="mb-3">
            <span className="text-sm text-[#ED165F]">First Name</span>
            <p className="text-xl">{data.firstName}</p>
          </h2>
          <h2 className="mb-3">
            <span className="text-sm text-[#ED165F]">Last Name</span>
            <p className="text-xl">{data.lastName}</p>
          </h2>
          <h2 className="mb-3">
            <span className="text-sm text-[#ED165F]">Email</span>
            <p className="text-xl">{data.email}</p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
