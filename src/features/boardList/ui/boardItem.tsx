"use client";
import BaseInput from "@/shared/BaseInput";
import { Card } from "@/shared/ui/card";
import { Checkbox } from "@/shared/ui/checkbox";
import { Form, FormField, FormItem } from "@/shared/ui/form";
import { useForm } from "react-hook-form";

const BoardItem = () => {
  const f = useForm({
    defaultValues: {
      isDone: false,
      itemTitle: "untitled",
    },
  });
  return (
    <>
      <Card className="flex gap-4 bg-white p-4 m-4 ">
        <Form {...f}>
          <form
            onSubmit={f.handleSubmit((data) => {
              console.log(data);
            })}
            className="flex gap-4 w-full  items-center"
          >
            <FormField
              name={"isDone"}
              control={f.control}
              render={() => (
                <FormItem>
                  <Checkbox id="done" />
                </FormItem>
              )}
            />
            <FormField
              name="itemTitle"
              control={f.control}
              render={(field) => (
                // TODO :: BaseInput Comp, SHOULD BE CHANGED UI TYPE TITLE,DATE TYPE
                //
                <FormItem className="flex-1">
                  <BaseInput
                    placeholder="no title"
                    className="p-2 w-full border-none shadow-none text-black text-5xl placeholder:text-5xl font-bold tracking-tighter ring-transparent"
                    {...field}
                  />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </Card>
    </>
  );
};

export default BoardItem;
