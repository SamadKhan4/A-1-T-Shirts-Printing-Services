import HomePage from "./pages/HomePage";
import ProductCatalogPage from "./pages/ProductCatalogPage";
import ProductCollectionPage from "./pages/ProductCollectionPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ServicesPage from "./pages/ServicesPage";
import { productCollections } from "./data/productCollections";

export default function App() {
  const path = window.location.pathname;

  if (path === "/products") {
    return <ProductCatalogPage />;
  }

  if (path === "/services") {
    return <ServicesPage />;
  }

  if (path.startsWith("/services/")) {
    return <ServiceDetailPage slug={path.replace("/services/", "")} />;
  }

  if (path.startsWith("/products/")) {
    const slug = path.replace("/products/", "");

    if (productCollections[slug]) {
      return <ProductCollectionPage slug={slug} />;
    }
  }

  if (path.startsWith("/products/")) {
    return <ProductDetailPage slug={path.replace("/products/", "")} />;
  }

  return <HomePage />;
}
