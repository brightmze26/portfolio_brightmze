"use client";

import {
  Avatar,
  Box,
  Typography,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Typewriter from "typewriter-effect";
import { IoAccessibilitySharp, IoAlbums } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const iconSize = isMobile ? 30 : 24;

  const { ref, inView } = useInView({
    triggerOnce: true, // hanya jalan sekali
    threshold: 0.3, // aktif ketika 30% komponen terlihat
  });

  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowTypewriter(true);
    }
  }, [inView]);

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 flex flex-col items-center bg-neutral-50"
      ref={ref}
    >
      {/* Introduction */}
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Introduction
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        About Me
      </Typography>

      <Paper
        elevation={3}
        sx={{
          background: "linear-gradient(to bottom, white 0%, #f9f9f9 100%)",
          borderRadius: 3,
          p: { xs: 3, md: 4 },
          maxWidth: 800,
          width: "100%",
        }}
      >
        {/* Profile Header */}
        <Box display="flex" alignItems="center" gap={2} mb={3}>
          <Avatar
            alt="Bright"
            src="/images/Photo_Bright.jpg"
            sx={{ width: 60, height: 60 }}
          />
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Bright Misael Zega
            </Typography>
            <Typography variant="body2" color="text.secondary">
              @brightmze
            </Typography>
          </Box>
        </Box>

        {/* Typewriter Descriptions */}
        <Box sx={{ fontSize: "1rem", lineHeight: 1.8, color: "#333" }}>
          {showTypewriter && (
            <Typewriter
              options={{
                autoStart: true,
                delay: 10,
                loop: false,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "I am an enthusiast who is passionate about exploring the current technological developments, particularly in the fields of software and AI. I have gained practical experience in building dynamic full-stack web applications and have been involved in artificial intelligence training projects, including processing datasets and fine-tuning Large Language Models (LLMs)."
                  )
                  .pauseFor(300)
                  .typeString(
                    "<br /><br />I am very excited to explore new things in this field of technology to solve problems, combining design, functional code, and the right solutions for technological advancement. I aim to leverage my skills, validated through practical experience, to contribute to technological advancement and serve group or individual needs."
                  )
                  .start();
              }}
            />
          )}
        </Box>

        {/* Skills & Achievements */}
        <Stack direction="column" spacing={2} mt={4}>
          <Box display="flex" alignItems="center" gap={2}>
            <IoAlbums size={iconSize} />
            <Typography>
              I have developed over 7 projects using various technologies and stacks.
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <IoAccessibilitySharp size={iconSize} />
            <Typography>
              I have over 1 year of experience in Software and AI.
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </section>
  );
}
