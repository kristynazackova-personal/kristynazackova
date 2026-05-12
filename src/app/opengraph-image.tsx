import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

export const alt = "Kristyna Zackova — Product Leader & Founder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const original = await readFile(join(process.cwd(), "public", "kristyna.png"));
  const portrait = await sharp(original)
    .resize(752, 940, { fit: "cover", position: "top" })
    .jpeg({ quality: 82 })
    .toBuffer();
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #FFFFFF 0%, #F7F6F3 55%, #F0EFEC 100%)",
          padding: 64,
        }}
      >
        {/* Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 640,
            marginRight: 56,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#800020",
            }}
          >
            Kristyna Zackova
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.12,
              color: "#1A1A1A",
              marginTop: 22,
            }}
          >
            Turning complex reality into simple products.
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#6F6F6F",
              marginTop: 26,
              lineHeight: 1.4,
            }}
          >
            Principal Product Manager @ Inmar Intelligence · Founder of
            ConversationLens
          </div>
        </div>

        {/* Portrait */}
        <img
          src={portraitSrc}
          width={376}
          height={470}
          style={{
            width: 376,
            height: 470,
            flexShrink: 0,
            objectFit: "cover",
            borderRadius: 28,
            border: "8px solid #FFFFFF",
            boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
