"use client";
import BaseInput from "@/shared/BaseInput";
import { DatePickerField, DateRangeType } from "@/shared/components";
import { Card } from "@/shared/ui/card";
import { Checkbox } from "@/shared/ui/checkbox";
import { Form, FormField, FormItem } from "@/shared/ui/form";
import { useForm } from "react-hook-form";

interface IBoardItem extends DateRangeType {
  isDone: boolean;
  itemTitle: string;
}
const BoardItem = () => {
  const f = useForm<IBoardItem>({
    defaultValues: {
      isDone: false,
      itemTitle: "untitled",
      boardFrom: null,
      boardTo: null,
    },
  });
  return (
    // TODO CARD FORM WITH REACT HOOK FORM 새로 만들기
    <>
      <Card className="flex flex-col gap-4 bg-white p-4 m-4 ">
        <Form {...f}>
          <form
            onSubmit={f.handleSubmit((data) => {
              console.log(data);
            })}
            className="flex  gap-4 w-full items-center"
          >
            <FormField
              name="isDone"
              control={f.control}
              render={({ field }) => (
                <FormItem>
                  <Checkbox id="done" />
                </FormItem>
              )}
            />
            <FormField
              name="itemTitle"
              control={f.control}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <BaseInput
                    placeholder="no title"
                    className="p-2 w-full border-none shadow-none text-black text-5xl placeholder:text-5xl font-bold tracking-tighter ring-transparent"
                    {...field}
                  />
                </FormItem>
              )}
            />
            <DatePickerField name="boardFrom" label="from" {...f} />
            <DatePickerField name="boardTo" label="to" {...f} />
          </form>
        </Form>
      </Card>
    </>
  );
};

export default BoardItem;
