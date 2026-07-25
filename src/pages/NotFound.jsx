import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <Layout>
      <Seo path="/404" title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-obsidian px-6 pt-20 text-center">
        <span className="eyebrow text-brabus">404</span>
        <h1 className="mt-4 font-display text-4xl font-medium text-ivory md:text-5xl">This address doesn't exist.</h1>
        <p className="mt-4 max-w-md text-ash">The page you're looking for may have moved. Head back home to continue exploring M3M BRABUS Residences.</p>
        <Link to="/" className="eyebrow mt-8 border border-brabus bg-brabus px-7 py-4 text-ivory hover:bg-brabusdeep">
          Back To Home
        </Link>
      </section>
    </Layout>
  );
}
