// File: app/page.tsx
import { neon } from "@neondatabase/serverless";

export default function Page() {
  return (
    <form>
      <input type="text" placeholder="write a comment" name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}
