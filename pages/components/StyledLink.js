import Link from "next/link";

export default function StyledLink({ href, text }) {
  return (
    <Link href={href ?? ''}>
      <a
        href={href ?? ''}
        style={{ textDecoration: "none" }}
        _hover={{ textDecoration: "underline" }}
      >
        <span fontSize="20px" fontWeight="600" color="black">
          {text}
        </span>
      </a>
    </Link>
  );
}
