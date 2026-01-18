import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Landing.tsx"),
  route("login", "routes/Login.tsx"),
  route("register", "routes/Register.tsx"),
  route("factory-register", "routes/FactoryRegistration.tsx"),
  route("document-register", "routes/DocumentRegistration.tsx"),
  route("dashboard", "routes/EstimationPrice.tsx"),
  route("marketplace", "routes/Marketplace.tsx"),
  route("report", "routes/Report.tsx"),
  route("estimation", "routes/Dashboard.tsx"),
  route("document-register-nib", "routes/DocumentNIB.tsx"),
  route("document-register-amdal", "routes/DocumentAmdal.tsx"),
  route("document-register-pricing", "routes/DocumentPricing.tsx"),
  route("tracking", "routes/tracking.tsx"),
] satisfies RouteConfig;
