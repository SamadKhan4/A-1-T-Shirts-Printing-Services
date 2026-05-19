import HomePage from "./pages/HomePage";
import ProductCatalogPage from "./pages/ProductCatalogPage";
import ProductDetailPage from "./pages/ProductDetailPage";

export default function App() {
  const path = window.location.pathname;

  if (path === "/products") {
    return <ProductCatalogPage />;
  }

  if (path.startsWith("/products/")) {
    return <ProductDetailPage slug={path.replace("/products/", "")} />;
  }

  return <HomePage />;
}
