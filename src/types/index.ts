export type WaitlistStatus = "idle" | "submitting" | "success" | "error";

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}

export interface Look {
  id: string;
  index: string;
  title: string;
  image: string;
  alt: string;
}

export interface ManifestoChapter {
  number: string;
  title: string;
  line: string;
}
