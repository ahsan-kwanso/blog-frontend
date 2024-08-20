import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useError } from "../hooks/useError";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Link,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../validations/schemaValidations";
import { PAGE_URL } from "../utils/settings";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(8),
  boxShadow: theme.shadows[3],
}));

const Form = styled("form")(({ theme }) => ({
  width: "100%",
  maxWidth: 400,
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const LoginLink = styled(Link)(({ theme }) => ({
  marginTop: theme.spacing(4),
  textDecoration: "none",
  color: theme.palette.primary.main,
  "&:hover": {
    textDecoration: "underline",
  },
}));

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [error, setError] = useError();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const result = await signup(data.name, data.email, data.password);
      if (result.data.token) {
        navigate(PAGE_URL.posts);
      } else {
        setError("An unexpected error occurred. Try Again Later");
      }
      // Redirect or show success message
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs" sx={{ marginTop: "100px" }}>
        <StyledPaper>
          <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
            Sign Up
          </Typography>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            <SubmitButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Sign Up
            </SubmitButton>
            <LoginLink href={PAGE_URL.login} variant="body2">
              Already have an account? Sign In
            </LoginLink>
          </Form>
        </StyledPaper>
      </Container>
    </>
  );
};

export default Signup;
