import StyledLink from "./StyledLink";

export default function Navbar({ video1, video2 }) {
  return (
    <>
      <div>
        <StyledLink href={video1 ?? ''} text="Video 1" />
      </div>
      <div>
        <StyledLink href={video2 ?? ''} text="Video 2" />
      </div>
    </>
  );
}
