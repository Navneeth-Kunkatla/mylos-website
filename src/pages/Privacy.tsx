import LegalPage from "@/components/layout/LegalPage";
import { site } from "@/lib/site-config";

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        {site.legalName} (&quot;we,&quot; &quot;us&quot;) respects your privacy. This policy describes what
        information we collect when you visit our website or contact us, and how we use it.
      </p>
      <h2>Information we collect</h2>
      <p>
        We may collect basic analytics (pages visited, device type) to improve our site. If you contact us by
        phone or in person, we do not collect that information through this website unless you voluntarily
        submit a form we provide in the future.
      </p>
      <h2>How we use information</h2>
      <ul>
        <li>To operate and improve our website and menu experience</li>
        <li>To respond to inquiries you send us directly</li>
        <li>To comply with legal obligations when required</li>
      </ul>
      <h2>Third-party services</h2>
      <p>
        Our site may link to social networks or map services (for example, Google Maps). Those services have
        their own privacy policies. We encourage you to review them when you leave our site.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Visit our <a href="/find-us">locations page</a> for store phone numbers,
        or ask in person at any {site.name} location.
      </p>
    </LegalPage>
  );
}
