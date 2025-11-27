import { auth } from "@/auth";

import Image from "next/image";
import Link from "next/link";

export default async function ProfileBtn() {
  const session = await auth(); // null if not signed in
  const user = session?.user;

  return (
    <div className="flex items-center gap-3">
      {user ? (
        <Link href={'/profile'}>
          <Image
            src={user.image ?? "/icons/profile.png"}
            alt={user.name ?? "User"}
            className="min-h-7 min-w-7 mb-1 rounded-full"
            width={25}
            height={25}
          />
        </Link>
      ) : (
        <Link href={'/sign-in'}>
          <Image
            src={"/icons/profile.png"}
            alt={"nonce"}
            className="h-8 w-8 rounded-full mb-1"
            width={25}
            height={25}
            unoptimized
          />
        </Link>
      )}
    </div>
  );
}
