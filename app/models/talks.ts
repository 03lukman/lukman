export type Talk = {
  slug: string;
  date: string;
  title: string;
  description: string;
  event: string;
  resources: Array<{ href: string; label: string }>;
};

export const conferences: Talk[] = [
  {
    slug: "gdg-devfest-2024-yogyakarta",
    date: "2024-12-01",
    title: "Embracing #nobuild in Modern Web",
    description:
      "A deep dive on the #nobuild movement in the modern web development.",
    event: "GDG DevFest Yogyakarta 2024",
    resources: [
      {
        href: "https://zainf.dev/fest-2024-yogyakarta",
        label: "Open slides",
      },
    ],
  }
];

export const meetups: Talk[] = [
  {
    slug: "/reliable-tests-with-ai",
    date: "2025-07-03",
    title: "Writing Reliable Tests for React using AI",
    description:
      "An interactive live coding session to demonstrate how to write reliable React tests with AI assistance.",
    event: "Hacktiv8 Technical Workshop",
    resources: [
      {
        href: "https://github.com/zainfathoni/reliable-tests-with-ai/blob/main/deck.pdf",
        label: "Open slides",
      },
      {
        href: "https://zainf.dev/reliable-tests-with-ai",
        label: "GitHub repository",
      },
      {
        href: "https://x.com/hacktiv8id/status/1940247093987484116",
        label: "Announcement",
      },
    ],
  }
];

export const podcasts: Talk[] = [
  {
    slug: "codevcast-2023",
    date: "2023-08-14",
    title:
      'DevStory - "From Local to International Conferences" ft. Zain Fathoni',
    description:
      "My learning-in-public story about speaking in local meetups and international conferences.",
    event: "Codevcast",
    resources: [
      {
        href: "https://zainf.dev/codevcast-2023",
        label: "Watch video",
      },
      {
        href: "https://podcasters.spotify.com/pod/show/codevcast/episodes/DevStory---From-Local-To-International-Conferences-ft--Zain-Fathoni-e2831k5",
        label: "Listen now",
      },
    ],
  }
];
