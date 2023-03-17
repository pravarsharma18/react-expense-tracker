import { useState } from "react";
import Button from "./Button";
import FormInput from "./FormInput";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Table from "./Table";

const schema = z.object({
  description: z.string().min(3, { message: "Required minimum 3 characters" }),
  amount: z.number({ invalid_type_error: "Enter some amount" }),
  category: z.string().min(1, { message: "Select category" }),
});

type FormData = z.infer<typeof schema>;

const Expense = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [expense, setExpense] = useState([]);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Description"
          extras={{ ...register("description") }}
          errors={errors?.description}
        />
        <FormInput
          label="Amount"
          inputType="number"
          extras={{ ...register("amount", { valueAsNumber: true }) }}
          errors={errors?.amount}
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
        {errors.category && (
          <span className="text-danger">{errors.category.message}</span>
        )}
        <div className="mt-3">
          <Button name="Submit" />
        </div>
      </form>
      <Table columnNames={schema._getCached().keys} data={expense} />
    </>
  );
};

export default Expense;
