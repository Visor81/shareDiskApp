import { Button, Stack } from "@mantine/core";

import "@mantine/core/styles.css";

import { ShareDisk } from "./pkg/components/share-disk";
import { useState } from "react";

export function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Stack align="center" justify="center" h="100vh">
        <Button onClick={() => setOpened(true)}>Open share disk</Button>
      </Stack>
      <ShareDisk
        opened={opened}
        onClose={() => setOpened(false)}
        onAttachFiles={() => console.log("Attach files")}
        onCreateLink={() => console.log("Create link")}
      />
    </>
  );
}
