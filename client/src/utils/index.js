import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[randomIndex];

  //This line makes sure that we don't get the same random prompt twice.
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
