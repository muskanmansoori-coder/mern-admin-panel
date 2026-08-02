const { default: z } = require("zod");

const updatedUserSchema = z.object({
    username: z
      .string({ required_error: "Username is required" })
      .trim()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(30, { message: "Username must not exceed 30 characters" }),
  
    email: z
      .string({ required_error: "Email is required" })
      .trim()
      .email({ message: "Invalid email address" }),
  
    phone: z
      .string({ required_error: "Phone number is required" })
      .trim()
      .min(10, { message: "Phone number must be 10 digits" })
      .max(10, { message: "Phone number must be 10 digits" }),
  
  });
  module.exports={updatedUserSchema};