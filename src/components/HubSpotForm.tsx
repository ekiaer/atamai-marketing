'use client'

import { useEffect } from 'react'

// HubSpot embedded form (WO-MARKETING-FORMS-CRM-2026-07-22, Task 1D).
// The loader script scans the page for .hs-form-frame divs and renders the
// published HubSpot form into them. One shared loader serves every form in
// portal 246832486 (na2).
const HUBSPOT_PORTAL_ID = '246832486'
const HUBSPOT_REGION = 'na2'
const LOADER_SRC = `https://js-${HUBSPOT_REGION}.hsforms.net/forms/embed/${HUBSPOT_PORTAL_ID}.js`

export default function HubSpotForm({ formId }: { formId: string }) {
  useEffect(() => {
    // Re-append the loader on every mount: the script scans for unrendered
    // .hs-form-frame divs on load, which also covers client-side navigation
    // (e.g. Home -> Contact) where the frame div appears after first load.
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${LOADER_SRC}"]`)
    existing?.remove()
    const script = document.createElement('script')
    script.src = LOADER_SRC
    script.defer = true
    document.body.appendChild(script)
  }, [formId])

  return (
    <div
      className="hs-form-frame"
      data-region={HUBSPOT_REGION}
      data-form-id={formId}
      data-portal-id={HUBSPOT_PORTAL_ID}
    />
  )
}
