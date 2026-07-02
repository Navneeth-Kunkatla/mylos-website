import LegalPage from "@/components/layout/LegalPage";
import { site } from "@/lib/site-config";

export default function Terms() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        By using the {site.legalName} website, you agree to these terms. If you do not agree, please do not use
        the site.
      </p>
      <h2>Menu</h2>
      <p>
        Menu items and flavors shown online are for general information. In-store availability may vary.
        Seasonal flavors rotate; ask your server for today&apos;s full lineup and current pricing.
      </p>
      <h2>Intellectual property</h2>
      <p>
        All content on this site — including text, logos, and design — is owned by {site.legalName} or used with
        permission. You may not copy or redistribute it without our written consent.
      </p>
      <h2>Disclaimer</h2>
      <p>
        This website is provided &quot;as is.&quot; We do not guarantee uninterrupted access. We are not liable for
        indirect damages arising from use of the site.
      </p>
      <h2>Changes</h2>
      <p>We may update these terms from time to time. Continued use of the site means you accept the updated terms.</p>
    </LegalPage>
  );
}
