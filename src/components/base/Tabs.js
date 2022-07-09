import { styled } from "@mui/material/styles";
import TabsList from "@mui/material/Tabs";
import TabElement from "@mui/material/Tab";

const Tabs = styled((props) => <TabsList {...props} />)({
  "& .MuiTabs-indicator": {
    display: "flex",
    backgroundColor: "white",
    justifyContent: "center",
    position: "absolute",
    minHeight: "100%",
    zIndex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    top: 0,
  },
  "& .MuiTabs-flexContainer": {
    width: "100%",
    justifyContent: "space-between",
  },
});

const Tab = styled((props) => <TabElement disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    zIndex: 10,
    fontWeight: 500,
    fontSize: 20,
    paddingLeft: 100,
    paddingRight: 100,
    color: "primary",
    "&.Mui-selected": {},
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export { Tab, Tabs };
