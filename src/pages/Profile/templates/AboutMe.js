import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import usePatchUser from "api/usePatchUser";
import TextFieldRounded from "components/base/Inputs/TextFieldRounded";
import { Fragment, useEffect, useState } from "react";

export default function AboutMe({ description = "" }) {
  const [text, setText] = useState("");
  const [editing, setEditing] = useState(null);

  const { mutate, isLoading } = usePatchUser({ onSuccess: () => setEditing(null) });

  useEffect(() => setText(description), [description]);

  const save = () => {
    mutate({ description: text });
  };

  return (
    <Fragment>
      <TextFieldRounded
        multiline
        value={text}
        onChange={(e) => {
          if (editing === null) {
            setEditing(text);
          }
          setText(e.target.value);
        }}
        variant="standard"
        placeholder={"Inserisci una descrizione su di te!"}
        fullWidth
      />
      {editing !== null && (
        <>
          <LoadingButton loading={isLoading} onClick={save} color="secondary">
            Salva
          </LoadingButton>
          <Button
            color="secondary2"
            onClick={() => {
              setText(editing);
              setEditing(null);
            }}
          >
            Annulla
          </Button>
        </>
      )}
    </Fragment>
  );
}
