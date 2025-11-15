import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Tabs,
  Tab,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { login, register } from "../api/auth";
import { useAuth } from "../providers/auth-context";

export default function ProfilePopup({ open, onClose }) {
  const [tab, setTab] = useState(0); // 0 = Login, 1 = Register

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => setShowPassword((prev) => !prev);
  const [errors, setErrors] = useState({}); 
  const { setAuthUser, authUser, clearAuthUser } = useAuth();

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
    setErrors({});
    setFormData({ username: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      validateField(name, value);
    }
  };

  const validateField = (name, value) => {
    let error = "";

    if (name === "username" && tab === 1) {
      if (!value.trim()) error = "Username is required";
    }

    if (name === "email") {
      if (!value) error = "Email is required";
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
        error = "Invalid email address";
    }

    if (name === "password") {
      if (!value) error = "Password is required";
      else if (tab === 1 && value.length < 6)
        error = "Password must be at least 6 characters";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate all fields for current tab
    if (tab === 1 && !formData.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (tab === 1 && formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      if (tab === 0) {
        const data = await login({
          email: formData.email,
          password: formData.password,
        });
        setAuthUser(data.userObject);
        console.log("Login success:", data);
      } else {
        // Register API
        const data = await register(formData);
        console.log("Register success:", data);
      }
      onClose();
    } catch (error) {
      // show backend errors inline
      const apiErrors = {};
      if (error.response?.data?.errors) {
        error.response.data.errors.forEach((err) => {
          apiErrors[err.field] = err.message;
        });
        setErrors(apiErrors);
      } else {
        console.error("API error:", error.response?.data || error.message);
      }
    }
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        {authUser ? (
          <div>Are you sure you want to logout?</div>
        ) : (
          <Tabs
            value={tab}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            centered
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
        )}
      </DialogTitle>

      <DialogContent sx={{ paddingBottom: "40px" }}>
        {authUser ? (
          <Button
            variant="contained"
            sx={{ backgroundColor: "rgb(245,89,5)", borderRadius: "8px" }}
            onClick={() => {
              clearAuthUser();
              onClose();
            }}
          >
            Logout
          </Button>
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-3"
          >
            {tab === 1 && (
              <TextField
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username}
                fullWidth
              />
            )}
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
            />
            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleToggle} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "rgb(245,89,5)", borderRadius: "8px" }}
            >
              {tab === 0 ? "Login" : "Register"}
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
