import { useState } from "react";

export function CompanyIdentity({ name, logo }: { name: string; logo: string }) {
  const [failedLogo, setFailedLogo] = useState("");

  return (
    <span className="company-identity">
      <span className="company-avatar" aria-hidden="true">
        {failedLogo === logo ? name.charAt(0) : (
          <img src={logo} alt="" width="24" height="24" loading="lazy" onError={() => setFailedLogo(logo)} />
        )}
      </span>
      <span className="company-name">{name}</span>
    </span>
  );
}
