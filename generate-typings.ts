import { GraphQLDefinitionsFactory } from "@nestjs/graphql";
import { join } from "path";

let watch = false;
if (process.argv.includes("--watch") || process.argv.includes("-w")) {
  watch = true;
}

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ["./src/**/*.graphql"],
  path: join(process.cwd(), "src/graphql.ts"),
  outputAs: "class",
  emitTypenameField: true,
  watch,
});
