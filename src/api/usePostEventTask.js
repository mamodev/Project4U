import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useMutation } from "react-query";

const postEventTask = (api, eventId, data) =>
  api({ method: "post", url: `/event/${eventId}/tasks/`, data: data }).then(
    (response) => response.data
  );

export default function usePostEventTask(eventId, config) {
  const { api } = useContext(AuthContext);
  return useMutation((data) => postEventTask(api, eventId, data), config);
}
