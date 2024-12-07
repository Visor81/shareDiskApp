import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";

import { Root } from "./pkg/components/root";

export function App() {
  return (
    <MantineProvider>
      <Root />
    </MantineProvider>
  );
}
