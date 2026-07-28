export default function validateUser(formData) {
  const errors = {};

  // Name
  if (!formData.name.trim()) {
    errors.name = "Name is required";
  } else if (formData.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters";
  } else if (formData.name.trim().length > 30) {
    errors.name = "Name cannot exceed 30 characters";
  } else if (!/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(formData.name.trim())) {
    errors.name = "Only alphabets and single spaces are allowed";
  }

  // Email
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      formData.email.trim()
    )
  ) {
    errors.email = "Invalid email address";
  }

  // Password
  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  } else if (formData.password.length > 20) {
    errors.password = "Password cannot exceed 20 characters";
  } else if (!/[A-Z]/.test(formData.password)) {
    errors.password =
      "Password must contain at least one uppercase letter";
  } else if (!/[a-z]/.test(formData.password)) {
    errors.password =
      "Password must contain at least one lowercase letter";
  } else if (!/[0-9]/.test(formData.password)) {
    errors.password =
      "Password must contain at least one number";
  } else if (
    !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
  ) {
    errors.password =
      "Password must contain at least one special character";
  }

  // Confirm Password
  if (!formData.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  // Age
  const age = Number(formData.age);

  if (!formData.age) {
    errors.age = "Age is required";
  } else if (isNaN(age)) {
    errors.age = "Age must be a number";
  } else if (age < 18 || age > 100) {
    errors.age = "Age must be between 18 and 100";
  }

  // Gender
  if (!formData.gender) {
    errors.gender = "Please select a gender";
  }

  // Phone
  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
    errors.phone =
      "Phone number must be a valid 10-digit Indian mobile number";
  }

  // City
  if (!formData.city) {
    errors.city = "Please select a city";
  }

  return errors;
}