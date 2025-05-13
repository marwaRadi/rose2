import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" aria-label="return to home">
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;
