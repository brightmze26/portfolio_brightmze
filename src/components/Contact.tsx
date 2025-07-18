"use client";

import { useState } from "react";
import { Alert, Button, TextField, Collapse } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { FiMail, FiPhone } from "react-icons/fi";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/xkgznyaj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setSuccess(false), 4000);
      }
    } catch (err) {
      console.error("Failed to send message", err);
    }
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-2">Contact</h2>
      <p className="text-center text-gray-600 mb-12">Let’s get in touch soon!</p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 flex flex-col gap-5"
        >
          <Collapse in={success}>
            <Alert
              icon={<CheckIcon fontSize="inherit" />}
              severity="info"
              variant="filled"
              sx={{
                backgroundColor: "#e0e0e0",
                borderRadius: "9999px",
                color: "#000",
                fontWeight: 500,
                mb: 1,
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Message sent successfully!
            </Alert>
          </Collapse>

          <TextField
            label="Your Name"
            required
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="filled"
            InputProps={{
              disableUnderline: true,
              sx: {
                backgroundColor: "whitesmoke",
                borderRadius: 2,
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
                "&.Mui-focused": {
                  backgroundColor: "#f0f0f0",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#666",
                fontWeight: 500,
                fontSize: "0.9rem",
                "&.Mui-focused": { color: "#666" },
              },
            }}
          />

          <TextField
            label="Your Email"
            type="email"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
            InputProps={{
              disableUnderline: true,
              sx: {
                backgroundColor: "whitesmoke",
                borderRadius: 2,
                "&:hover": { backgroundColor: "#f0f0f0" },
                "&.Mui-focused": {
                  backgroundColor: "#f0f0f0",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#666",
                fontWeight: 500,
                fontSize: "0.9rem",
                "&.Mui-focused": { color: "#666" },
              },
            }}
          />

          <TextField
            label="Your Message"
            multiline
            rows={4}
            required
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant="filled"
            InputProps={{
              disableUnderline: true,
              sx: {
                backgroundColor: "whitesmoke",
                borderRadius: 2,
                "&:hover": { backgroundColor: "#f0f0f0" },
                "&.Mui-focused": {
                  backgroundColor: "#f0f0f0",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#666",
                fontWeight: 500,
                fontSize: "0.9rem",
                "&.Mui-focused": { color: "#666" },
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              textTransform: "none",
              fontWeight: 600,
              bgcolor: "whitesmoke",
              color: "#333",
              borderRadius: 2,
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#e0e0e0",
              },
              "&:focus": {
                outline: "none",
              },
              "&:active": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            Send Message
          </Button>
        </form>

        {/* CONTACT INFO */}
        <div className="space-y-10 pt-6 md:pt-10">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-gray-100">
              <FiMail className="text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Contact me by Email</h4>
              <p className="text-sm text-gray-700">
                brightmisaelzega@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-gray-100">
              <FiPhone className="text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Contact me by Phone</h4>
              <p className="text-sm text-gray-700">
                +62 852-6276-3526
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
