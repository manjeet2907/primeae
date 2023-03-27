import React from "react";
import { MetaData } from "../../Layouts";
import CreateTable from "./CreateTable";

const headers = ["User Name", "User Email", "Role", "Edit"];

const Users = () => {
  return (
    <>
      <MetaData title='Users-Admin' />
      <h3>Users Management</h3>
      <div className='userspage_admin'>
        <div className='usersList'>
          <CreateTable headers={headers} />
        </div>
      </div>
    </>
  );
};

export default Users;
