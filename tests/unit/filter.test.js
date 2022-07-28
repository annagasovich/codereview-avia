import { test, expect } from "vitest";
import TicketFilter from "@/filters/ticketFilter";

const { sort } = TicketFilter();
const testData = [
  { company: "aaa", order: 3 },
  { company: "bbb", order: 1 },
  { company: "ccc", order: 2 },
];
const criteria = (a, b) => a.order - b.order;

test("test sort", () => {
  let reordered = sort(testData, criteria);
  expect(reordered[0].company).toBe("bbb");
});
