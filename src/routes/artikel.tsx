import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/artikel")({
  component: ArtikelLayout,
});

function ArtikelLayout() {
  return <Outlet />;
}
