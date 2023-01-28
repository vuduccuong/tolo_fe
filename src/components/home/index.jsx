import { Fragment, useEffect, useMemo } from "react";
import { useState } from "react";
import { clientAPI } from "../../helpers/client-api";
import MaterialReactTable from "material-react-table";
import Moment from "react-moment";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setLoading(true);
    clientAPI.get("/api/v1/accounts").then(({ data }) => {
      const { users } = data;
      setUserList(users);
      setLoading(false);
    });
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        muiTableHeadCellProps: { sx: { color: "green" } },
      },
      {
        accessorFn: ({ userprofile }) =>
          `${userprofile.first_name} ${userprofile.middle_name} ${userprofile.last_name}`,
        id: "full_name",
        header: "Full Name",
        muiTableHeadCellProps: { sx: { color: "green" } },
      },
      {
        accessorKey: "email",
        header: "Email",
        muiTableHeadCellProps: { sx: { color: "green" } },
      },
      {
        accessorKey: "username",
        header: "Username",
        muiTableHeadCellProps: { sx: { color: "green" } },
      },
      {
        accessorKey: "date_joined",
        header: "Date Joined",
        Cell: ({ cell }) => <Moment toNow>{cell.getValue()}</Moment>,
        muiTableHeadCellProps: { sx: { color: "green" } },
      },
      {
        accessorKey: "is_active",
        header: "Status",
        muiTableHeadCellProps: { sx: { color: "green" } },
      },
      {
        accessorKey: "last_login",
        header: "Last Active Session",
        Cell: ({ cell }) =>
          cell.getValue() ? (
            <Moment format="DD-MM-yyyy HH:MM:ss Z">{cell.getValue()}</Moment>
          ) : null,
        muiTableHeadCellProps: { sx: { color: "green" } },
      },
    ],
    []
  );

  return loading ? (
    <em>Loading</em>
  ) : (
    <MaterialReactTable
      columns={columns}
      data={userList}
      enableRowSelection //enable some features
      enableColumnOrdering
      enableGlobalFilter={false} //turn off a feature
    />
  );
};

export default HomePage;
