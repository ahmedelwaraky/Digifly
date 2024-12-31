"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setUsers } from "@/store/usersSlice";
import axiosInstance from "@/axiosConfig/instance";

const Table = () => {
  const dispatch = useDispatch();
  const t = useTranslations("Table");
  const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/user-informations");
        // console.log("Response : ", response.data);
        dispatch(setUsers(response.data));
      } catch (error) {
        console.error("Error message: ", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-bold text-[16px] text-secondary">
        {t("results")}:
      </h3>
      <table className="rounded-sm border-gray-400 shadow-lg">
        <thead className="">
          <tr className="text-left bg-gray-100 border-b">
            <th className="border-r py-4 px-6 flex gap-[10px] font-normal text-sm">
              {t("firstName")}
            </th>
            <th className="border-r py-4 px-6 gap-[10px] font-normal text-sm">
              {t("lastName")}
            </th>
            <th className="border-r py-4 px-6 gap-[10px] font-normal text-sm">
              {t("mobileNumber")}
            </th>
            <th className="border-r py-4 px-6 gap-[10px] font-normal text-sm">
              {t("email")}
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: string | any) => (
            <tr key={user.id} className="border-b text-left">
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                {user.FirstName}
              </td>
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                {user.LastName}
              </td>
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                {user.Phone}
              </td>
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                {user.Email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
