import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: "#6C1D45",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F5EBDC",
          fontWeight: 700,
          fontFamily: "serif",
          letterSpacing: "-0.02em",
        }}
      >
        E
      </div>
    ),
    { ...size }
  );
}
