import timeline from "./../../../data/timeline.json";

export default function handler(req, res) {
  if (timeline.length > 0) {
    res.status(200).json(timeline);
  } else {
    res.status(404).json({ message: "Timeline not found!" });
  }
}
