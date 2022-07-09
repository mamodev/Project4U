import { Box, Fab, Grid, Stack, Typography } from "@mui/material";
import useShowcases from "api/useShowcases";
import ShowCasePreview from "components/modules/showcase/ShowCasePreview";
import ProjectContext from "context/ProjectContext";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import anime from "animejs";
import Showcase from "./Showcase";
import { AddRounded } from "@mui/icons-material";
import CreateShowcase from "./CreateShowcase";

export default function Dashboard() {
  const { projectId } = useParams();
  const { getProjectId } = useContext(ProjectContext);
  const { data, isSuccess } = useShowcases(getProjectId(projectId));
  const [addOpen, setAddOpen] = useState(false);

  const [searchParams] = useSearchParams();

  const ref = useRef();
  const pattern = [3, 1, 2, 1, 1, 1, 2, 1, 3, 1, 2, 1, 1, 1, 2, 1, 3];
  const id = searchParams.get("id");

  let pos = 0;
  if (id && isSuccess) {
    let sum = 0;
    for (let i = 0; i < data.length; ++i) {
      if (sum + pattern[i] > 3) {
        pos = i;
        sum = pattern[i];
      } else sum += pattern[i];
      if (data[i].id === id) {
        pattern.splice(i, 0, pattern[i]);
        break;
      }
    }
  }

  return (
    <Stack>
      <CreateShowcase open={addOpen} handleClose={() => setAddOpen(false)} />

      <Stack direction="row" alignItems="center" mb={2}>
        <Typography variant="h3">Bacheche</Typography>
      </Stack>
      {isSuccess && (
        <Box sx={{ width: "100%", zIndex: 100 }}>
          <Grid
            ref={ref}
            container
            alignItems="end"
            sx={{
              position: "relative",
              width: "90%",
            }}
          >
            {data?.map((e, i) => {
              const index = pattern[i];
              return (
                <Fragment key={i}>
                  {searchParams.has("id") && i === pos && (
                    <Grid item xs={12}>
                      <Box sx={{ m: 1, height: 640 }}></Box>
                    </Grid>
                  )}
                  <ShowcaseBox showcase={e} dim={index} containerRef={ref} />
                </Fragment>
              );
            })}

            <Grid item xs={3}>
              <Stack
                sx={{
                  width: "100%",
                  height: 136,
                  alignItems: "center",
                  justifyContent: "center",
                  pb: 1,
                }}
              >
                <Fab color="primary" onClick={() => setAddOpen(true)}>
                  <AddRounded />
                </Fab>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      )}
    </Stack>
  );
}

const formatColor = (color) => {
  return color.startsWith("#") ? color : "#" + color;
};

function ShowcaseBox({ showcase, dim, containerRef }) {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const old = useRef();

  const showcaseRef = useRef();
  const gridRef = useRef();
  const innerRef = useRef();

  useEffect(() => open && startAnimation(), [open]);

  const startAnimation = (reverse = false) => {
    anime.remove(showcaseRef.current);
    anime.remove(innerRef.current);
    console.log("here");
    anime({
      targets: showcaseRef.current,

      width: reverse
        ? [containerRef.current.getBoundingClientRect().width + "px", old?.current?.width + "px"]
        : [old?.current?.width + "px", containerRef.current.getBoundingClientRect().width + "px"],

      top: [old?.current?.top + "px", old?.current?.top + "px"],
      left: reverse ? [0, old.current.left] : [old.current.left, 0],
      opacity: {
        value: reverse ? [1, 0] : [0, 1],
        delay: reverse ? 180 : 0,
        duration: reverse ? 120 : 0,
      },
      complete: () => {
        if (!reverse) showcaseRef.current.style.width = "100%";
        if (reverse) setOpen(false);
      },
      duration: reverse ? 300 : 500,
      easing: "easeOutExpo",
    });

    anime({
      targets: innerRef.current,
      height: reverse ? [630, 136] : [136, 630],
      duration: reverse ? 300 : 500,
      easing: "easeOutExpo",
    });
  };

  const openHandler = () => {
    if (!open) {
      const rect = gridRef?.current?.getBoundingClientRect();
      const contRect = containerRef?.current?.getBoundingClientRect();
      old.current = {
        width: rect?.width,
        top: rect?.top - contRect?.top,
        left: rect?.left - contRect?.left,
      };

      setOpen(true);
      setSearchParams({ id: showcase.id });
    }
  };

  const closeHandler = () => {
    setSearchParams({});
    startAnimation(true);
  };
  return (
    <>
      <Grid
        ref={gridRef}
        item
        xs={dim * 4}
        onClick={openHandler}
        sx={{
          display:
            searchParams.has("id") && searchParams.get("id") === showcase.id ? "none" : "block",
        }}
      >
        <Box sx={{ m: 1 }}>
          <ShowCasePreview
            variant={dim}
            id={showcase.id}
            title={showcase.name}
            color={showcase.color}
            users_list={showcase.users_list}
            last_message={showcase.last_message}
            last_event={showcase.last_event}
          />
        </Box>
      </Grid>

      <Box
        ref={showcaseRef}
        sx={{
          boxSizing: "border-box",
          position: "absolute",
          p: 1,

          zIndex: 100,
          display: open ? "block" : "none",
        }}
      >
        <Box
          ref={innerRef}
          sx={{
            border: 3,
            bgcolor: "white",
            userSelect: "none",
            borderRadius: 6,
            color: showcase.color ? formatColor(showcase.color) : "primary.main",
          }}
        >
          <Showcase open={open} name={showcase.name} onClose={closeHandler} />
        </Box>
      </Box>
    </>
  );
}
