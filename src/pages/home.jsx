import Container from "@mui/material/Container";
import Hero from "../components/hero";
import PopularLocations from "../components/popular-locations";
import { useAuth } from "../providers/auth-context";

export default function Home() {
  const { authUser } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <main>
        {authUser ? (
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center pt-3">
            Welcome{" "}
            <span className="text-orange-500">{authUser?.username}</span>
          </h1>
        ) : (
          ""
        )}
        <Hero />
        <Container maxWidth="lg" className="!pt-0">
          <PopularLocations />
        </Container>
      </main>
    </div>
  );
}
