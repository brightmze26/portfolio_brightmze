"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { projects } from "@/app/data/projects";
import type { Project } from "@/app/types/project";
import { Typography } from "@mui/material";

const Tile = styled("div")({
  position: "relative",
  width: "100%",
  borderRadius: 8,
  overflow: "hidden",
  cursor: "pointer",
  backgroundColor: "#fff",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& .overlay-title": {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    fontWeight: 600,
    fontSize: "1rem",
    transition: "opacity 0.3s ease",
    zIndex: 2,
  },

  "& .image-wrapper": {
    position: "absolute",
    inset: 0,
    transition: "opacity 0.3s ease",
    zIndex: 1,
    opacity: 0,
  },

  "@media (hover: hover)": {
    "&:hover .image-wrapper, &:focus-visible .image-wrapper": {
      opacity: 1,
    },

    "&:hover .overlay-title, &:focus-visible .overlay-title": {
      opacity: 0,
    },
  },
});

const TitleOverlay = styled("span")({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 600,
  fontSize: "1rem",
  textAlign: "center",
  padding: "0 4px",
  background: "rgba(255,255,255,0.9)",
  transition: "opacity .3s ease",
});

const Img = styled(Image)({
  objectFit: "cover",
  transition: "opacity .3s ease",
});

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 flex flex-col items-center bg-neutral-50"
    >
      <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
      <p className="text-gray-600 text-lg text-center max-w-2xl mb-12">
        A showcase of the projects I've built and the problems I've solved throughout my development journey.
      </p>

      <Box sx={{ width: "100%", maxWidth: 1200, height: "100%" }}>
        <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
          {projects.map(({ id, src, height, title }) => (
            <Tile
              key={id}
              style={{ height }}
              onClick={() =>
                setSelected(projects.find((p) => p.id === id) ?? null)
              }
              tabIndex={0}
            >
              {/* Image wrapper */}
              <div className="image-wrapper">
                <Image
                  src={src}
                  alt={title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Title */}
              <div className="overlay-title">{title}</div>
            </Tile>
          ))}
        </Masonry>
      </Box>

      {/* ---------- MODAL ---------- */}
      <Dialog
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 3, bgcolor: "#ffffff" },
        }}
      >
        {selected && (
          <>
            {/* Title dan tombol close */}
            <DialogTitle
              sx={{ m: 0, p: 2, fontWeight: 700, textAlign: "center" }}
            >
              {selected.title}
              <IconButton
                aria-label="close"
                onClick={() => setSelected(null)}
                sx={{ position: "absolute", right: 8, top: 8 }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </DialogTitle>

            <DialogContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                pb: 4,
              }}
            >
              {/* Gambar besar */}
              <div className="relative w-full aspect-video rounded-md overflow-hidden">
                <Image
                  src={selected.src}
                  alt={selected.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Row: stack icons + button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                {/* Icons kiri */}
                <Box display="flex" gap={2}>
                  {selected.stack.map(({ Icon, label }) => (
                    <Box
                      key={label}
                      display="flex"
                      alignItems="center"
                      gap={0.5}
                      sx={{ fontSize: 12 }}
                    >
                      <Icon size={16} />
                      <span>{label}</span>
                    </Box>
                  ))}
                </Box>

                {/* Tombol kanan */}
                {selected.liveUrl && (
                  <Button
                    variant="outlined"
                    href={selected.liveUrl}
                    target="_blank"
                    sx={{
                      fontWeight: 600,
                      textTransform: "none",
                      bgcolor: "#fff",
                      color: "black",
                      borderColor: "#ccc",
                      "&:hover": {
                        bgcolor: "#f5f5f5",
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                )}
              </Box>

              {/* Deskripsi */}
              <Typography
                variant="body2"
                textAlign="center"
                color="text.secondary"
              >
                {selected.desc}
              </Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </section>
  );
}
