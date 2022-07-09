import useShowcaseMessages from "api/useShowcaseMessages";
import { useSearchParams } from "react-router-dom";
import Calendar from "../Calendar/Calendar";

export default function EventPanel() {
  const [searchParams] = useSearchParams();
  const { data } = useShowcaseMessages(searchParams.get("id"), "EVENT");

  return (
    <Calendar
      sx={{ width: "100%", height: "100%" }}
      calendarProps={{ defaultView: "agenda" }}
      events={data?.results?.map(({ content }) => ({
        title: content.name ? content.name : content.description,
        event: content,
        start: new Date(content.started_at),
        end: new Date(content.ended_at),
      }))}
    />
  );
}
