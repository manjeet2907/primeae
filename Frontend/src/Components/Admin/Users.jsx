import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MetaData } from "../../Layouts";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import {
  clearErrors,
  deleteUser,
  getAllUsers,
} from "../../store/actions/userAction";
import { DELETE_USER_RESET } from "../../store/constants/userConstants";
import CreateTable from "./CreateTable";
import { toast } from "react-hot-toast";

const headers = ["name", "email", "role", "Edit", "Delete"];

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, users } = useSelector((state) => state.allUsers);

  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.profile);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success(message);
      navigate("/admin/users");
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
  }, [dispatch, error, deleteError, isDeleted, message]);
  const TableData = [];
  return (
    <>
      <MetaData title='Users-Admin' />
      <h3>Users Management</h3>
      <div className='userspage_admin'>
        <div className='usersList'>
          {users &&
            users.map((user) =>
              TableData.push({
                name: user.name,
                email: user.email,
                role: user.role,
                Edit: (
                  <Link to={``} className='reacticons_admin'>
                    <AiFillEdit />
                  </Link>
                ),
                Delete: (
                  <button
                    className='reacticons_admin'
                    onClick={() => deleteUserHandler(user._id)}>
                    <AiFillDelete />
                  </button>
                ),
              })
            )}
          <CreateTable headers={headers} data={TableData} />
        </div>
      </div>
    </>
  );
};

export default Users;
