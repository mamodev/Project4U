import { Stack, Typography } from "@mui/material";
import Slider from "components/base/Slider";

export default function RangeList({ value = [], onChange: change = () => {} }) {
  return (
    <Stack sx={{ width: "100%" }}>
      {value.map((e, i) => (
        <Stack
          key={i}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Typography>{e.label}</Typography>
          <Slider
            value={e.range}
            onChange={(event, val) => change(e.label, val)}
            sx={{ width: 180 }}
            valueLabelDisplay="auto"
            min={0}
            step={1}
            max={5}
          />
        </Stack>
      ))}
    </Stack>
  );
}
