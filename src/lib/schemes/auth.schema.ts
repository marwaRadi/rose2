import { z } from "zod";

export
  const registerSchema = z
  .object({
    firstName: z
      .string({ required_error: "First name is required" })
      .min(3, { message: "First name must be at least 3 characters" })
      .max(10, { message: "First name must be at most 10 characters" }),
    lastName: z
      .string({ required_error: "Last name is required" })
      .min(3, { message: "Last name must be at least 3 characters" })
      .max(10, { message: "Last name must be at most 10 characters" }),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid Email" })
      .min(5, { message: "Email must be at least 5 characters" }),
    password: z
      .string({ required_error: "Password is required" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
        message:
          "Password must be at least 8 characters and include at least one uppercase letter,one lowercase, one number,and one special characters",
      }),
    rePassword: z.string({ required_error: "Re-password is requires" }),
    phone: z.string({ required_error: "phone is required" }).refine(
      (value) => {
        // const phone = parsePhoneNumberFromString(value);
        const phone = /^\+\d{1,3}\d{7,12}$/.test(value);
        return phone;
      },
      {
        message:
          "invalid phone number. Please use the international format, e.g +20",
      }
    ),
    gender: z.enum(["male", "female", "other"], {
      required_error: "gender is required",
    }),
  })
  .refine((Values) => Values.password === Values.rePassword, {
    message: " password doesn't match",
    path: ["rePassword"],
  });

// login schema
export const loginSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email({ message: "invalid email" }),
  password : z.string({required_error :"password is required"}).min(3,{message:"Wrong password"})
})

// 
export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
