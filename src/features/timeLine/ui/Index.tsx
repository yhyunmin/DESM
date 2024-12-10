"use client";
import { BaseButton } from "@/shared";
import { DatePickerField, DateRangeType } from "@/shared/components";
import { Form } from "@/shared/ui/form";
import { useForm } from "react-hook-form";

const Index = () => {
  const f = useForm<DateRangeType>({
    defaultValues: {
      from: null,
      to: null,
    },
  });
  const onSubmit = (data: { from: Date | null; to: Date | null }) => {
    console.log("year", data);
    return null;
  };

  return (
    <>
      <div className="flex gap-2 justify-start">
        <Form {...f}>
          <form onSubmit={f.handleSubmit(onSubmit)}>
            <div className="flex">
              <DatePickerField name="from" label="From" control={f.control} />
              <DatePickerField name="to" label="To" control={f.control} />
              <BaseButton mode="secondary" type="submit">
                View Timeline
              </BaseButton>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Index;
