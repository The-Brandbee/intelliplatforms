"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <div style={{ padding: "40px 24px", textAlign: "center" }}>
          <h2>Something went wrong</h2>
          <p style={{ marginTop: "12px", color: "#5c6d75" }}>
            Please try again. If the problem continues, refresh the page.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "#01c591",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
