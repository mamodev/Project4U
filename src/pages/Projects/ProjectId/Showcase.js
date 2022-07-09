import { Close } from "@mui/icons-material";
import { TabContext, TabPanel } from "@mui/lab";
import { IconButton, Menu, MenuItem, Stack, styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { Tabs, Tab } from "components/base/Tabs";
import { useState } from "react";

import ShowcaseNewMessage from "components/modules/showcase/ShowcaseNewMessage";
import StreamPanel from "components/templates/Showcase/StreamPanel";
import EventPanel from "components/templates/Showcase/EventPanel";
import DetailsPanel from "components/templates/Showcase/DetailsPanel";

const StyledTabPanel = styled(TabPanel)({
  height: "100%",
  padding: 0,
});
export default function Showcase({ name, onClose: close, open }) {
  const [tab, setTab] = useState("1");

  return (
    <Box
      sx={{
        borderRadius: 6,
        bgcolor: grey[200],
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Header name={name} onClose={close} />

      <TabContext value={tab}>
        <Tabs value={tab} onChange={(e, v) => setTab(v)}>
          <Tab label="Stream" value="1" />
          <Tab label="Dettagli" value="2" />
          <Tab label="Eventi" value="3" />
        </Tabs>
        {open && (
          <Box
            sx={{
              position: "relative",
              height: "calc(100% - 130px)",
              bgcolor: "white",
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
              overflowY: "auto",
            }}
          >
            <TabPanel value="1">
              <Box>
                <ShowcaseNewMessage />
                <StreamPanel />
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <DetailsPanel />
            </TabPanel>

            <StyledTabPanel value="3">
              <EventPanel />
            </StyledTabPanel>
          </Box>
        )}
      </TabContext>
    </Box>
  );
}

function Header({ name, onClose: close }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack p={2.5} direction="row" alignItems="center" justifyContent="space-between">
      <Typography sx={{ fontWeight: "500" }} variant="h5">
        {name}
      </Typography>
      <Stack direction="row">
        <IconButton color="primary" onClick={close}>
          <Close />
        </IconButton>
      </Stack>
      <Menu
        id="showcase-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          border: 1,
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",

            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem onClick={handleClose}>Aggiungi</MenuItem>
        <MenuItem onClick={handleClose}>Elimina</MenuItem>
      </Menu>
    </Stack>
  );
}
