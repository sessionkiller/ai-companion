import { UserButton } from "@clerk/nextjs";

export default function RootPage() {
  return <UserButton afterSignOutUrl="/" />;
}
