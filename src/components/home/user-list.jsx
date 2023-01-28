import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Fragment } from "react";
import Moment from "react-moment";

const UserList = ({ users }) => {
  return (
    <Fragment>
      {users.map((item) => {
        const fullName = `${item?.userprofile.first_name} ${item?.userprofile.middle_name} ${item?.userprofile.last_name}`;
        return (
          <Card key={item.id} sx={{ maxWidth: 400, marginTop: 2 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {item.username[0]}
                </Avatar>
              }
              title={fullName}
              subheader={<Moment toNow>{item.date_joined}</Moment>}
            />
            <CardMedia
              component="img"
              height="194"
              image={item?.userprofile.avatar}
              alt={fullName}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.userprofile.bio}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Fragment>
  );
};

export default UserList;
