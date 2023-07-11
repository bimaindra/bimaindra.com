import path from "path";
import { promises as fs } from "fs";

export default async function handler(req: any, res: any) {
  // Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd());
  // Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + "/posts.json", "utf8");
  // Return the content of the data file in json format
  res.status(200).json(fileContents);
}
