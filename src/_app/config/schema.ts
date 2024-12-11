import { z } from "zod";

const DateRangeSchema = z.object({
  from: z.date().nullable().describe("타임라인 시작날짜"),
  to: z.date().nullable().describe("타임라인 끝날짜"),
});

export default { DateRangeSchema };
