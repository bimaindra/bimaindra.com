import timeline from "data/timeline.json";

export default function handler(req: any, res: any) {
  if (timeline.length) {
    res.status(200).json(timeline);
  } else {
    res.status(404).json({ message: "Timeline not found!" });
  }
}
