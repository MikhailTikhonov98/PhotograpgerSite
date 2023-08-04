import Link from "next/link";
export default function About() {
  return (
    <>
      <div className="container">
        <div className="text">
          <div
            style={{ color: "#dddddd", maxWidth: "75vw", marginLeft: "1vw" }}
          >
            <h1
              style={{
                fontSize: "2.5vmax",
                lineHeight: "1.5",
                marginBottom: "2vh",
              }}
            >
              DMITRY CHAPALA
            </h1>
            <p
              style={{
                fontSize: "1.6vmax",
                lineHeight: "1.5",
                marginBottom: "2vh",
              }}
            >
              On photographer Dmitry Chapala's pictures, women's bodies are
              shown as something almost metaphysical. A slight surrealism in his
              works sends us to the world of dreams, dreams about women. Staying
              within the boundaries of good taste, he never shows anything
              vulgar. Sometimes calm and peaceful, quiet as a melody, and
              sometimes expressive and vivid, almost until exaltation. This is
              the result of his skillful work.<br></br>
            </p>
            <p
              style={{
                fontSize: "1.6vmax",
                lineHeight: "1.5",
                marginBottom: "2vh",
              }}
            >
              He manages to portay the openness of the soul though the naked
              body, claiming by that that body is beautiful. His art is not
              propaganda-like, there is no conflict in it. This is for the sake
              of art, the absolute aesthetic of nu.
            </p>
            <p
              style={{
                fontSize: "1.6vmax",
                lineHeight: "1.5",
                marginBottom: "2vh",
              }}
            >
              Tamina, «Absolute Aesthetics nudity»
            </p>
            <div
              style={{
                fontSize: "1.6vmax",
                lineHeight: "1.5",
                marginBottom: "2vh",
                color: "#8c8b8b",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "1.6vmax",
                  lineHeight: "1.5",
                  marginBottom: "2vh",
                  color: "#8c8b8b",
                  textDecoration: "none",
                }}
              >
                Galeries:{" "}
              </span>{" "}
              <a
                style={{
                  fontSize: "1.6vmax",
                  lineHeight: "1.5",
                  marginBottom: "2vh",
                  color: "#8c8b8b",
                  textDecoration: "none",
                }}
                href="/nude/"
              >
                nude
              </a>
              <a href="/genre/"> genre </a>
              <a href="/portrait/"> portrait </a>
            </div>
            <br />
            <p>
              <a href="/e/">
                <span>Russian version</span>
              </a>
              <br />
              Telephone: +7 916 107-07-16
              <br />
              Email: emotion@dmitrychapala.com
            </p>
          </div>
        </div>
      </div>
      <div className="image1"></div>
      {/* <div>
          Back to <Link href="/">Home</Link>
        </div> */}
    </>
  );
}
