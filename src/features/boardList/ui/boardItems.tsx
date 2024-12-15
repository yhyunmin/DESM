import { BaseInput } from "@/shared";
import { DatePickerFormItem } from "@/shared/components";
import { Card } from "@/shared/ui/card";
import { Checkbox } from "@/shared/ui/checkbox";
import { FormField, FormItem } from "@/shared/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";

const BoardItems = () => {
  const formSchema = z.object({
    isDone: z.boolean().default(false),
    itemTitle: z.string().describe("board item title"),
    boardFrom: z.date().nullable().describe("board Item from date"),
    boardTo: z.date().nullable().describe("board Item to date"),
  });
  type BoardItemType = z.infer<typeof formSchema>;

  const f = useForm<BoardItemType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isDone: false,
      itemTitle: "",
      boardFrom: null,
      boardTo: null,
    },
  });

  const onSubmit = (values: BoardItemType) => {
    console.log(values);
  };
  return (
    <>
      <Card>
        <Form {...f}>
          <form onSubmit={f.handleSubmit(onSubmit)}>
            <FormField
              name="isDone"
              control={f.control}
              render={({ field }) => (
                <FormItem>
                  <Checkbox
                    id={"isDone"}
                    onCheckedChange={field.onChange}
                    checked={field.value}
                  />
                </FormItem>
              )}
            />
            <FormField
              name="itemTitle"
              control={f.control}
              render={({ field }) => (
                <FormItem>
                  <BaseInput placeholder="no title" {...field} />
                </FormItem>
              )}
            />
            <FormField
              name="boardFrom"
              control={f.control}
              render={({ field }) => (
                <DatePickerFormItem<BoardItemType> field={field} {...field} />
              )}
            />
            <FormField
              name="boardTo"
              control={f.control}
              render={({ field }) => (
                <DatePickerFormItem<BoardItemType> field={field} {...field} />
              )}
            />
          </form>
        </Form>
      </Card>
    </>
  );
};

export default BoardItems;
