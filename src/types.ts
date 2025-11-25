export interface Schedule {
  [key: string]: string;
}

export interface Girl {
  name: string;
  price: string | null;
  schedule: Schedule;
}

export enum WeekDay {
  Monday = "星期一",
  Tuesday = "星期二",
  Wednesday = "星期三",
  Thursday = "星期四",
  Friday = "星期五",
  Saturday = "星期六",
  Sunday = "星期七"
}

export interface NavItem {
  label: string;
  path: string;
}
