type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export interface Service {
  title: string;
  icon: string;
  text: string;
}

export interface FAQ {
  id: number;
  title: string;
  text: string;
}

export interface Feedback {
  id: number;
  rate: number;
  image: string;
  title: string;
  text: string;
}
