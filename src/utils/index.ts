import moment from "moment";

export const formattedTime = (time: string) =>
  moment(time, ["YYYY-MM-DDTHH:mm:ss", "HH:mm:ss"]).format("H:mm");
