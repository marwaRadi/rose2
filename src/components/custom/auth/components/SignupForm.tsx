import ScaleWhileTap from "@/components/common/animation/ScaleWhileTap";
import FormHeader from "./FormHeader";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerSchema, RegisterSchema } from "@/lib/schemes/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerAction } from "@/lib/actions/auth.action";
import { toast } from "sonner";
import LoadingButton from "@/components/common/animation/LoadingButton";

//=====================================================================
function Signup({
  setView,
}: {
  setView: React.Dispatch<React.SetStateAction<Views>>;
  }) {
  
  //=====================================================================
  //hooks
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<RegisterSchema>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
  });

  // router hook
  //=======================================================================
  // functions

  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    // get payload
    const payload = await registerAction(data);
    // check if payload is valid or not
    // if valid
    if (payload && "user" in payload && payload?.message === "success") {
      // show success message
      toast.success("Account created successfully", {
        style: { color: "green" },
      });
      // reset form
      reset();
      
      // show login form
      setView("login");
    } else {
      // if not valid
      // if payload has error
      if (payload && "error" in payload) {
        // show error message
        toast.error(payload?.error, { style: { color: "red" } });
      }
      // if payload has message
      if (payload && "message" in payload) {
        toast.error(payload?.message, { style: { color: "red" } });
      }
    }
  };

  //=====================================================================
  // render
  return (
    <div className="grid gap-[32px]">
      {/* header */}
      <FormHeader text="Create account" />
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-[24px]">
        {/* firstName   */}
        <div className="space-y-1">
          <div className="w-full h-12 relative flex rounded-xl capitalize">
            <input
              required
              className="peer w-full  outline-none px-4 text-base rounded-xl  border  focus:shadow-sm "
              id="firstName"
              type="text"
              {...register("firstName")}
            />
            <label
              className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 rounded-full peer-focus:top-0 peer-focus:left-3 font-light 
              peer-focus:text-sm peer-focus:text-primary-dark 
              peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm   peer-valid:text-primary-dark  duration-150"
              htmlFor="firstName"
            >
              first name
            </label>
          </div>
          <p className="pl-2 text-red-500 font-semibold ">
            {errors.firstName?.message}
          </p>
        </div>
        {/* Last Name */}
        <div>
          <div className="w-full h-12 relative flex rounded-xl capitalize ">
            <input
              required
              className="peer w-full  outline-none px-4 text-base rounded-xl  border  focus:shadow-sm "
              id="lastName"
              type="text"
              {...register("lastName")}
            />
            <label
              className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 rounded-full peer-focus:top-0 peer-focus:left-3 font-light 
              peer-focus:text-sm peer-focus:text-primary-dark 
              peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm   peer-valid:text-primary-dark  duration-150"
              htmlFor="lastName"
            >
              last Name
            </label>
          </div>
          <p className="pl-2 text-red-500 font-semibold ">
            {errors.lastName?.message}
          </p>
        </div>

        {/* email*/}
        <div>
          <div className="w-full h-12 relative flex rounded-xl capitalize ">
            <input
              required
              className="peer w-full  outline-none px-4 text-base rounded-xl  border  focus:shadow-sm "
              id="email"
              type="email"
              {...register("email")}
            />
            <label
              className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 rounded-full peer-focus:top-0 peer-focus:left-3 font-light 
              peer-focus:text-sm peer-focus:text-primary-dark 
              peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm   peer-valid:text-primary-dark  duration-150"
              htmlFor="email"
            >
              email
            </label>
          </div>
          <p className="pl-2 text-red-500 font-semibold ">
            {errors.lastName?.message}
          </p>
        </div>

        {/* password */}
        <div>
          <div className="w-full h-12 relative flex rounded-xl capitalize ">
            <input
              required
              className="peer w-full  outline-none px-4 text-base rounded-xl  border  focus:shadow-sm "
              id="password"
              type="password"
              {...register("password")}
            />
            <label
              className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 rounded-full peer-focus:top-0 peer-focus:left-3 font-light 
              peer-focus:text-sm peer-focus:text-primary-dark 
              peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm   peer-valid:text-primary-dark  duration-150"
              htmlFor="password"
            >
              password
            </label>
          </div>
          <p className="pl-2 text-red-500 font-semibold ">
            {errors.password?.message}
          </p>
        </div>

        {/* rePassword */}
        <div>
          <div className="w-full h-12 relative flex rounded-xl capitalize ">
            <input
              required
              className="peer w-full  outline-none px-4 text-base rounded-xl  border  focus:shadow-sm "
              id="rePassword"
              type="password"
              {...register("rePassword")}
            />
            <label
              className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 rounded-full peer-focus:top-0 peer-focus:left-3 font-light 
              peer-focus:text-sm peer-focus:text-primary-dark 
              peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm   peer-valid:text-primary-dark  duration-150"
              htmlFor="rePassword"
            >
              rePassword
            </label>
          </div>
          <p className="pl-2 text-red-500 font-semibold ">
            {errors.rePassword?.message}
          </p>
        </div>

        {/* phone */}
        <div>
          <div className="w-full h-12 relative flex rounded-xl capitalize ">
            <input
              required
              className="peer w-full  outline-none px-4 text-base rounded-xl  border  focus:shadow-sm "
              id="phone"
              type="tel"
              {...register("phone")}
            />
            <label
              className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 rounded-full peer-focus:top-0 peer-focus:left-3 font-light 
              peer-focus:text-sm peer-focus:text-primary-dark 
              peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm   peer-valid:text-primary-dark  duration-150"
              htmlFor="phone"
            >
              phone
            </label>
          </div>
          <p className="pl-2 text-red-500 font-semibold ">
            {errors.phone?.message}
          </p>
        </div>

        {/* gender */}
        <div>
          <select
            {...register("gender")}
            id="gander"
            className="h-12 w-[40%] px-4 test-heading rounded-xl border focus:outline-none capitalize"
          >
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
          <p className="pl-2 text-red-500 font-semibold ">
            {errors.gender?.message}
          </p>
        </div>

        {/* already have account */}
        <div className="flex gap-2 justify-center">
          <span className="text-sm ">Already have an account ?</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setView("login");
            }}
            className="text-primary-dark cursor-pointer underline"
          >
            login
          </button>
        </div>
        {/* submit */}
        <ScaleWhileTap
          isValid={isValid}
          styling={`bg-primary-dark rounded-full py-2 text-white hover:bg-primary-light-10 transition-colors capitalize ${
            !isValid ? "opacity-50 cursor-not-allowed" : ""
          }
          ${isSubmitting ? " opacity-50 cursor-not-allowed" : ""}
            `}
        >
          {isSubmitting ? (
            <span>
              <LoadingButton /> <span>create account</span>
            </span>
          ) : (
            "create account"
          )}
        </ScaleWhileTap>
      </form>
    </div>
  );
}

export default Signup;
