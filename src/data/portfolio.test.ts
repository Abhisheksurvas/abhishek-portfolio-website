import { describe, expect, it } from "vitest";
import { filterProjects, projects } from "./portfolio";

const titles = (f: Parameters<typeof filterProjects>[1]) =>
  filterProjects(projects, f).map((p) => p.slug);

describe("project filters", () => {
  it("All Projects shows all six projects", () => {
    expect(titles("All Projects")).toHaveLength(6);
  });
  it("Security shows only the 2-Factor Authentication System", () => {
    expect(titles("Security")).toEqual(["two-factor-auth"]);
  });
  it("AI / ML shows EduRAG AI and the Smart Doctor system", () => {
    expect(titles("AI / ML")).toEqual(["edurag-ai", "smart-doctor"]);
  });
  it("Web Development includes the Library Management System", () => {
    expect(titles("Web Development")).toContain("library-management");
  });
});
