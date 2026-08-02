const { z } = require("zod");

const contactSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(30, { message: "Name must not exceed 30 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Please enter a valid email address" }),

  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(2, { message: "Message must be at least 10 characters" })
    .max(500, { message: "Message must not exceed 500 characters" }),
});

module.exports = contactSchema;