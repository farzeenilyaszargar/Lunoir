// app/page.tsx
import { auth } from "../auth"

export default async function Profile() {
  const session = await auth() // <- get current session

  return (
    <main className="p-8">
      {session?.user ? (
        <div>
          <img
            src={session.user.image ?? ""}
            alt={session.user.name ?? "User"}
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
          />
          <h1>Hello, {session.user.name}</h1>
          <p>{session.user.email}</p>
        </div>
      ) : (
        <p>Not signed in</p>
      )}
    </main>
  )
}
