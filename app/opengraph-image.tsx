import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// 1200x630 social share image, generated at build time and used by every page
// (LinkedIn, X, WhatsApp, Facebook previews).
export const alt = "Sushant Kumar - Senior Backend Developer (Node.js, PHP, Laravel, MySQL)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/sushant-kumar-profile.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const skills = ["Node.js", "NestJS", "PHP", "Laravel", "MySQL", "AWS"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 80px",
          background: "linear-gradient(135deg, #0f172a 0%, #111827 55%, #1e1b4b 100%)",
          color: "#f9fafb",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          width={300}
          height={300}
          alt=""
          style={{
            borderRadius: 150,
            objectFit: "cover",
            border: "6px solid #a78bfa",
            marginRight: 64,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>Sushant Kumar</div>
          <div style={{ fontSize: 38, color: "#93c5fd", marginTop: 16 }}>
            Senior Backend Developer
          </div>
          <div style={{ fontSize: 28, color: "#d1d5db", marginTop: 12 }}>
            10+ years · Chandigarh, India
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: 32 }}>
            {skills.map((s) => (
              <div
                key={s}
                style={{
                  fontSize: 24,
                  padding: "8px 20px",
                  marginRight: 12,
                  marginBottom: 12,
                  borderRadius: 999,
                  background: "rgba(59,130,246,0.18)",
                  color: "#bfdbfe",
                }}
              >
                {s}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 26, color: "#a78bfa", marginTop: 12 }}>skfighter.com</div>
        </div>
      </div>
    ),
    size,
  );
}
