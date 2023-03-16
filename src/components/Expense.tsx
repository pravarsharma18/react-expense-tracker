import Button from "./Button";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(3, { message: "Enter description" }),
  amount: z.number({ invalid_type_error: "Enter some amount" }),
  category: z.string().min(10, { message: "Select category" }),
});

const Expense = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });
  console.log(errors);

  return (
    <form onSubmit={handleSubmit((e) => console.log(e))}>
      <FormInput label="Description" extras={{ ...register("description") }} />
      <FormInput
        label="Amount"
        inputType="number"
        extras={{ ...register("amount", { valueAsNumber: true }) }}
      />
      <label htmlFor="category" className="form-label">
        Category
      </label>
      <select
        {...register("category")}
        defaultValue={"DEFAULT"}
        className="form-select"
        id="category"
        aria-label="Default select example"
      >
        <option></option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <div className="mt-3">
        <Button name="Submit" />
      </div>
    </form>
  );
};

export default Expense;
