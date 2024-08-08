import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <MantineProvider>
      <NavBar />
      <Projects />
    </MantineProvider>
  );
}
