import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useQuery } from "react-query";

const fetchShowcaseMessages = (api, showcaseId, filter) =>
  api({
    method: "GET",
    url: `showcase/${showcaseId}/messages/${
      filter ? "?type_message=" + filter : ""
    }`,
  }).then((resp) => resp.data);

export default function useShowcaseMessages(showcaseId, filter) {
  const { api } = useContext(AuthContext);
  return useQuery(["showcase", showcaseId, "messages", filter], () =>
    fetchShowcaseMessages(api, showcaseId, filter)
  );
}
