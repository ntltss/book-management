import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "520px",
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const checkInput = () => {
    console.log("Check!");
    console.log("loginId", loginId);
    console.log("password", password);
    fetch("http://localhost:8082/bookshelf/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        loginId: loginId,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (loginId === json.loginId && password === json.password) {
          window.location.href = "/books";
        }
      });
  };
  return (
    <>
      <Box mx={"auto"} my={4} className={classes.root}>
        <Paper>
          <Box px={4} py={2}>
            <Box my={2}>
              <Typography>書籍管理システム</Typography>
            </Box>
            <Divider />
            <Box py={2}>
              <Box my={2}>
                <TextField
                  variant="outlined"
                  label={"Eメールアドレス"}
                  onChange={(e) => {
                    setLoginId(e.target.value);
                  }}
                />
              </Box>
              <Box my={2}>
                <TextField
                  variant="outlined"
                  label={"パスワード"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Box>
            </Box>
            <Box my={2}>
              <Button
                color="primary"
                variant="contained"
                onClick={checkInput}
                // component={Link}
                // to="/books"
              >
                ログイン
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default LoginForm;
