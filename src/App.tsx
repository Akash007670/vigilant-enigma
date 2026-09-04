import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

export default function App() {
  switch (window.location.pathname) {
    case "/privacy-policy":
      return <PrivacyPolicy />;
    case "/terms":
      return <Terms />;
    default:
      return <HomePage />;
  }
}
