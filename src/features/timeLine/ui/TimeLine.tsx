"use client";
import { BaseButton } from "@/shared";
import {
  DatePickerField,
  DatePickerFormItem,
  DateRangeType,
} from "@/shared/components";
import { DateRangeSchema } from "@/shared/schema";
import { Form, FormField } from "@/shared/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";

export const TimeLine = () => {
  const f = useForm<DateRangeType>({
    resolver: zodResolver(DateRangeSchema),
    defaultValues: {
      from: null,
      to: null,
    },
  });

  const onSubmit = (data: DateRangeType) => {
    console.log(
      dayjs(data.from).format("YYYY.MM.DD"),
      dayjs(data.to).format("YYYY.MM.DD"),
    );
    return null;
  };

  return (
    <>
      <div className="flex  justify-start">
        <Form {...f}>
          <form onSubmit={f.handleSubmit(onSubmit)}>
            <div className="flex items-center">
              <FormField
                name="from"
                control={f.control}
                render={({ field }) => (
                  <DatePickerFormItem<DateRangeType> field={field} {...field} />
                )}
              />
              <FormField
                name="to"
                control={f.control}
                render={({ field }) => (
                  <DatePickerFormItem<DateRangeType> field={field} {...field} />
                )}
              />
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
