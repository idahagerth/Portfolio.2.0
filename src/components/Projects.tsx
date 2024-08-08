import { Grid } from "@mantine/core";

function Projects() {
  return (
    <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
      <Grid.Col span={4}>
        <p
          style={{
            backgroundColor: "#4F5E77",
            color: "#F7EBCC",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Good News App
        </p>
      </Grid.Col>
      <Grid.Col
        span={4}
        style={{
          backgroundColor: "#AC5A10",
          color: "#F7EBCC",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Dashboard App
      </Grid.Col>
      <Grid.Col
        span={4}
        style={{
          backgroundColor: "#7A725E",
          color: "#F7EBCC",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Shoe Store Website
      </Grid.Col>
      <Grid.Col
        span={4}
        style={{
          backgroundColor: "#F7EBCC",
          color: "#D34629",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Blog
      </Grid.Col>
      <Grid.Col
        span={4}
        style={{
          backgroundColor: "#DAD9C7",
          color: "#4F5E77",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Notes App
      </Grid.Col>
      <Grid.Col
        span={4}
        style={{
          backgroundColor: "#DDAE64",
          color: "white",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Game App " Memory "
      </Grid.Col>
      <Grid.Col
        span={4}
        style={{
          backgroundColor: "#D34629",
          color: "#F7EBCC",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Game App " Hangman "
      </Grid.Col>
    </Grid>
  );
}

export default Projects;
