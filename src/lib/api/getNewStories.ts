import { STORY_URL, NEW_STORIES_URL } from "$lib/constants";
import type { Story } from "$lib/types";
import axios from "axios";

export async function getNewStories(): Promise<Story[]> {
  const storiesId = await axios.get(NEW_STORIES_URL);
  const fetchedStories = await Promise.all(
    storiesId.data.slice(0, 10).map((id: number) => axios.get(`${STORY_URL}${id}.json`))
  );
  const stories: Story[] = fetchedStories.map((story) => story.data);

  return stories;
}

