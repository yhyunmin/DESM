import { z } from "zod";

const DateRangeSchema = z.object({
  from: z.date().optional().nullable().describe("타임라인 시작날짜"),
  to: z.date().optional().nullable().describe("타임라인 끝날짜"),
  boardFrom: z.date().optional().nullable().describe("board Item 시작날짜"),
  boardTo: z.date().optional().nullable().describe("board Item 끝날짜"),
});

export { DateRangeSchema };
