export type KeyValuePair = {
  [key: string]: string;
};

export type NavMenuType = {
  name: string;
  link: string;
  sub?: boolean;
  subMenu?: { name: string; link: string }[];
};

export type TestimonialType = {
  name: string;
  position: string;
  message: string;
  image: string;
};
