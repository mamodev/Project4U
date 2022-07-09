import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useQuery } from "react-query";

const fetchSkill = (api, skill) =>
  api({ method: "GET", url: `skills/?name=${skill}` }).then(
    (resp) => resp.data
  );

export default function useSkills(skill = "", enabled = true) {
  const { api } = useContext(AuthContext);

  return useQuery(["skills", skill], () => fetchSkill(api, skill), {
    enabled: enabled,
  });
}
