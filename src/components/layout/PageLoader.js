import { CircularProgress, Stack } from "@mui/material";
import { Suspense } from "react";

export default function PageLoader({ children }) {
  return (
    <Suspense
      fallback={
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "100%", width: "100%" }}
        >
          <CircularProgress />
        </Stack>
      }
    >
      {children}
    </Suspense>
  );
}
