

import React from "react";
import { Box, Typography, Divider, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const ThemedSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(4),
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.grey[100],
  color:
    theme.palette.mode === "dark"
      ? theme.palette.common.white
      : theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  boxShadow:
    theme.palette.mode === "dark"
      ? `0 4px 8px ${theme.palette.grey[800]}`
      : `0 4px 8px ${theme.palette.grey[300]}`,
}));

const About = ({ theme }) => {
  return (
    <div>
      <br></br>
      <br></br>
      <Container maxWidth="lg">
        <ThemedSection>
          <Typography variant="h4" gutterBottom fontWeight={"bold"}>
            Our Mission
          </Typography>
          <Typography variant="body1">
            Our mission is to empower farmers and gardeners with an easy-to-use
            tool for diagnosing plant diseases. By leveraging advanced AI and
            machine learning technologies, we aim to improve crop yields and
            promote sustainable agricultural practices.
          </Typography>
        </ThemedSection>
        <Divider />
        <ThemedSection>
          <Typography variant="h4" gutterBottom fontWeight={"bold"}>
            How to Use
          </Typography>
          <Typography variant="body1">
            <ol>
              <li>Click the Detector section on Top of Navbar</li>
              <li>Take a clear photo of the affected plant area.</li>
              <li>
                Upload the photo to our application by clicking the "Choose
                File" button.
              </li>
              <li>Wait a few moments for our AI to analyze the image.</li>
              <li>Receive a diagnosis and suggested treatment options.</li>
            </ol>
          </Typography>
        </ThemedSection>
        <Divider />
        <ThemedSection>
          <Typography variant="h4" gutterBottom fontWeight={"bold"}>
            Technology Used
          </Typography>
          <Typography variant="body1">
            Our application uses advanced machine learning algorithms,
            particularly convolutional neural networks (CNNs), Deep learning, to
            accurately diagnose plant diseases. The model is trained on a
            comprehensive dataset, enabling it to identify a wide variety of
            diseases with high accuracy and speed.
          </Typography>
        </ThemedSection>
      </Container>
    </div>
  );
};

export default About;
