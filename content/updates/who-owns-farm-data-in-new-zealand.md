---
title: "Who Owns Farm Data in New Zealand? (And What That Means for You)"
date: "2026-04-26"
excerpt: "In New Zealand, farm data ownership isn't settled by a single law — it's settled by the contracts you sign with every platform, processor, bank, and consultant who touches your data. Here's how it actually works, and what to look for."
author: "Erik Kiaer"
author_title: "Co-Founder, Atamai"
last_updated: "2026-04-26"
canonical_url: "https://atamaiag.com/updates/who-owns-farm-data-in-new-zealand/"
tags:
  - farm-data-ownership
  - new-zealand
  - privacy-act-2020
  - ipp-3a
  - farm-data-code-of-practice
  - farmer-data-sovereignty
  - agricultural-data-rights
  - nz-farm-software
faqs:
  - question: "Does the Privacy Act 2020 protect my farm data?"
    answer: "The Privacy Act 2020 protects personal information about identifiable individuals. It covers your name, contact details, IRD number, NAIT number, and similar personal records held by farm software companies and processors, and may also cover farm-related information where that information can reasonably be linked back to you as an identifiable individual. It does not clearly cover most pure operational farm data — soil test results, paddock boundaries, satellite imagery histories, or grazing records — which describes the property rather than a person. For that data, your contracts with each platform are what determine ownership and use rights."
  - question: "Is there a New Zealand law that says the farmer owns farm data?"
    answer: "No. There is no single statute in New Zealand that establishes farm data ownership or grants farmers a general proprietary right in their farm's operational data. The closest mechanism is the voluntary Farm Data Code of Practice, which requires accredited organisations to clearly disclose their data ownership and sharing policies but does not prescribe what those policies must say."
  - question: "What is IPP 3A and why does it matter for farmers?"
    answer: "IPP 3A is a new Information Privacy Principle added to the Privacy Act 2020 by the Privacy Amendment Act 2025. It comes into force on 1 May 2026. IPP 3A creates new notification obligations for organisations that collect personal information from a source other than the individual themselves — for example, a farm software platform that receives farmer information from a bank, council, processor, or consultant rather than from the farmer directly. From 1 May 2026, organisations that collect farmer information indirectly will generally need to notify the farmer that they have done so. This is a meaningful change for the agri-tech sector, where indirect collection is common."
  - question: "What is the Farm Data Code of Practice?"
    answer: "The Farm Data Code of Practice is a voluntary New Zealand accreditation scheme developed and supported by pastoral sector organisations including Beef+Lamb NZ, DairyNZ, Federated Farmers, the New Zealand Veterinary Association, the Dairy Companies Association of New Zealand, the Meat Industry Association, and Te Tumu Paeroa. Operational since 2016, it requires accredited organisations to disclose their farm data rights, processing, sharing, and storage policies in plain language. The Code is a transparency and assurance mechanism, not an ownership rule."
  - question: "What should I look for in farm software terms and conditions?"
    answer: "Look for three things. First, any 'perpetual, irrevocable, royalty-free licence' the company grants itself to use your data — this gives them broad control regardless of who 'owns' the data on paper. Second, 'aggregate' or 'anonymised' data carve-outs that allow the company to sell or share derived data with third parties. Third, the absence of any clause about data export or portability — if there is no documented way to take your data with you when you leave, you do not have practical ownership."
  - question: "Can I get my data out of a farm software platform if I want to leave?"
    answer: "That depends entirely on the platform's terms of service. Some platforms offer documented data export in machine-readable formats. Others offer no export at all. Before signing up to any platform, ask explicitly whether they will give you your data back in a portable format if you cancel your subscription, and ask to see an example of what an export looks like."
  - question: "What does farmer data sovereignty mean?"
    answer: "Farmer data sovereignty is the principle that the person who generates farm data — the farmer — should retain meaningful control over how that data is stored, used, and shared. In practice it means specific, informed, revocable, and visible consent for every use of the data, plus the right to export everything in a portable format at any time. It is a stronger standard than what New Zealand law currently requires, and it is the standard Atamai applies to itself."
  - question: "Does Atamai sell farmer data?"
    answer: "No. Atamai does not sell raw farmer data and never will. Partner integrations operate on farmer-consented, structured, revocable connections — the farmer decides what gets shared, with whom, for what purpose, and can shut it off at any time."
---

**In New Zealand, farm data ownership is not settled by a single law — it is settled by the contracts you sign with every platform, processor, bank, and consultant who touches your data.** Most farmers assume that because they generated the data, they own it. The legal reality is messier than that, and the gap between "what feels true" and "what your contracts actually say" is where farmer leverage gets quietly lost. This post walks through how farm data ownership actually works in New Zealand, what the Privacy Act 2020 does and doesn't cover, where the Farm Data Code of Practice fits in, and the three things to look for in any farm software agreement before you sign it.

*By Erik Kiaer, Co-Founder, Atamai — 26 April 2026*

---

## The Short Version

There is no single New Zealand law that says *"the farmer owns the data their farm generates."* The closest thing we have is the [Privacy Act 2020](https://www.legislation.govt.nz/act/public/2020/0031/latest/LMS23223.html), which protects *personal information about identifiable individuals*. That covers things like your name, your IRD number, and your contact details — but it does not clearly cover the soil test results from your back paddock, the NDVI history of your hill country block, or the grazing records from your winter rotation. Pure operational farm data sits in a legal grey zone: it is mostly about the *land*, not about a person, and Parliament has never directly legislated who owns it.

What fills the gap in practice is contract law. The terms and conditions you accept when you sign up for a farm management app, a satellite imagery service, a precision agriculture platform, or a processor's farmer portal are the documents that actually decide who can do what with your data. Behind those contracts, intellectual property law can also matter — copyright can protect compiled databases where there has been substantial investment in selecting and arranging the data, and trade secret protection can apply to non-public datasets — but for most farmers the real leverage still lives in the contracts they sign. Most farmers have never read those contracts in full, and that is exactly the problem.

The [NZ Farm Data Code of Practice](https://www.farmdatacode.org.nz/), operational since 2016, is a voluntary accreditation scheme that requires participating organisations to disclose their data ownership, sharing, and storage policies in plain language. It does not tell organisations *what* their policies must be — it just requires them to state those policies clearly so farmers can make informed choices. The Code is a transparency mechanism, not an ownership rule.

So who owns farm data in New Zealand? The honest answer is: **whoever the farmer's contracts say owns it.** The honest follow-up is: **the farmer should make sure those contracts say they do.**

---

## What the Privacy Act 2020 Actually Covers

The Privacy Act 2020 came into force on 1 December 2020 and is administered by the Office of the Privacy Commissioner. It applies to any organisation operating in New Zealand that collects "personal information," which the Act defines as *information about an identifiable individual*. The Act sets out 13 [Information Privacy Principles](https://www.privacy.org.nz/privacy-principles/) (IPPs) covering how personal information must be collected, stored, used, disclosed, and corrected. A fourteenth principle — [IPP 3A](https://www.privacy.org.nz/resources-and-learning/a-z-topics/ipp3a/), added by the Privacy Amendment Act 2025 — comes into force on **1 May 2026** and creates new notification obligations when an agency collects personal information from a source other than the individual themselves. IPP 3A matters for farmers because it directly affects farm software platforms that obtain farmer information indirectly — for example, via banks, regional councils, processors, or consultants. From 1 May 2026, those platforms will generally need to notify the farmer about the indirect collection.

For a farmer, the parts of the Privacy Act that clearly apply to data held by an agri-tech platform or processor include:

- **Your name, contact details, IRD number, NAIT number, and any identifying personal records.** These are unambiguously personal information.
- **Your right to ask what personal information an organisation holds about you** (IPP 6).
- **Your right to correct that personal information if it is wrong** (IPP 7).
- **The organisation's obligation not to disclose your personal information** without your authorisation, except in specific circumstances (IPP 11).
- **Your right to be informed of a privacy breach** if the organisation suffers one that could cause you serious harm.

What the Privacy Act *does not* clearly cover is the bulk of what farmers actually generate as "farm data": soil moisture readings from a sensor, satellite-derived pasture biomass estimates, paddock-level fertiliser application records, water consent monitoring data, or shapefile boundaries for a winter grazing block. These typically describe the property, not a person. In some situations, though — for example where detailed farm data is tightly linked to a named individual, a unique property address, or a small regional dataset where only a handful of farmers operate — parts of that dataset could still qualify as "personal information" because the farmer is reasonably identifiable when that data is combined with other information. Identifiability under the Privacy Act is contextual, not categorical, and the Privacy Commissioner's guidance is clear that information does not need to name someone to be personal information if their identity could be pieced together from what is held. The Privacy Act has nothing direct to say about who owns farm operational data, and it regulates what a software vendor can do with it only when that information qualifies as personal information about an identifiable individual.

This is not a flaw in the Privacy Act. The Act was written to protect individuals from misuse of their personal information — and in that, it does its job well. It was simply never designed to settle the ownership of agricultural production data. The result is a gap, and the gap matters because farm operational data is exactly the kind of information that has the most commercial value to processors, banks, fertiliser companies, and ag-tech aggregators.

---

## Where the Farm Data Code of Practice Fits

Recognising the gap, the New Zealand pastoral sector built its own answer in the form of the [Farm Data Code of Practice](https://www.farmdatacode.org.nz/), an industry-led accreditation scheme developed and supported by pastoral organisations including DairyNZ, Beef+Lamb NZ, Federated Farmers, the Dairy Companies Association of New Zealand, the New Zealand Veterinary Association, the Meat Industry Association, and Te Tumu Paeroa. The Code has been operational since early 2016, and while Farm Data Accreditation Ltd was originally established to administer the accreditation process, the Code itself is maintained as an industry framework rather than a state-mandated registry.

The Code is voluntary. Organisations that choose to become accredited agree to disclose, in plain language, three things to farmers:

1. **Who has the rights to the farm data they hold** (the farmer? the organisation? both? jointly?)
2. **How that data is processed and shared** (with whom, for what purpose, under what consent model)
3. **How the data is stored and secured**

The Code does not prescribe *what* an organisation's data ownership position must be. A company can take almost any position it likes — including positions farmers might find unfavourable — and still be accredited, as long as that position is communicated clearly and minimum security practices are in place. Accreditation is a transparency and assurance mark, not an ownership rule or quality judgment about the underlying business model.

For farmers, this matters for a practical reason: when you are evaluating a platform, you can ask whether they are accredited under the Code. If they are, their data ownership position is documented and discoverable. If they are not, you should ask why and read the terms and conditions yourself before signing.

---

## What Happens When You Sign Up to a Farm Software Platform

Every farm management app, every satellite imagery service, every cloud-connected sensor, every "free" benchmarking tool comes with a Terms of Service and a Privacy Policy. These documents are where farm data ownership is *actually* decided. They tend to be long, dense, and written by lawyers for lawyers. Most farmers click "I agree" without reading them, and that is the moment data leverage gets transferred away from the property and into the platform.

There are three patterns to watch for, because they show up repeatedly across the agri-tech sector — including in platforms that look farmer-friendly on the surface.

### Trap 1: Perpetual licence to use your data

The platform's terms grant the company a "perpetual, irrevocable, worldwide, royalty-free licence" to use the data you upload — for product development, research, marketing, "improving services," or sharing with unspecified third parties. The data is technically still yours, but you have given the platform permission to do almost anything with it forever, and you cannot revoke that permission even if you leave the service.

**What to look for:** the words *perpetual*, *irrevocable*, *royalty-free*, *sublicensable*, or *licence to use, reproduce, modify, and distribute*. If those appear in the section about your data, the company has taken a position on data ownership that gives them most of the practical control regardless of who "owns" it on paper.

### Trap 2: Aggregate data carve-outs

The terms say the platform will not share *your* data with third parties, but it reserves the right to use *aggregate, anonymised, or de-identified* data for any purpose, including sale to third parties. Aggregate data sounds safe — it is not your individual records, just averages and trends. In practice, "aggregate" is rarely defined in the contract, and the line between aggregate and identifiable can be very thin when there are only a handful of farms in a region. A regional benchmark "based on data from sheep and beef farms in North Otago" can be quite identifiable to anyone who knows the region.

**What to look for:** the phrases *aggregate data*, *anonymised data*, *de-identified data*, or *for benchmarking purposes*, especially when paired with *may be shared with* or *may be sold to* third parties. These clauses are often in a separate section from the main "we don't share your data" promise.

### Trap 3: No portability, no export, no exit

The terms are silent on what happens when you leave the service. You can cancel your subscription, but there is no documented way to export your historical data in a format another platform can import. If you want to move to a different system, you start from scratch. The platform may technically be returning "ownership" of your data to you, but if you cannot get the data out in a usable form, ownership in the abstract is not worth much.

**What to look for:** the absence of any clause about data export, data portability, or "right to receive your data in a machine-readable format." If there is no exit clause, assume there is no exit. Ask before you sign.

---

## What Atamai Believes, and Why It Matters

Atamai's position on farm data ownership is one of the things we will not walk back. It is set out in full in our [vision and values post](/updates/land-has-memory-atamai-vision-values/), but the short version is this:

**The farmer owns their data. Atamai is the custodian.** No data leaves a farm profile without the farmer's explicit, informed, revocable consent. Partner access is opt-in, visible, and can be shut off in one click. When a farmer leaves Atamai, they can export everything they have entered — in a documented format that competing platforms can import. Portability is a principle, not a competitive vulnerability. If a farmer cannot leave, we have not earned their trust.

That position translates into specific operational rules:

- **Consent is specific.** "Share my compliance report with ASB" is a specific consent. "Share my data with partners" is not — it is too broad and we do not use it.
- **Consent is informed.** Before granting consent, the farmer sees exactly what data will be shared, with whom, for what purpose, and for how long.
- **Consent is revocable.** The farmer can revoke consent at any time. Revocation takes effect immediately for future data access.
- **Consent is visible.** Active partner connections appear on the farmer's dashboard, with one-tap revocation. This is not buried in settings — it is a first-class element of the farmer's experience.

We did not invent these principles. They are an honest attempt to apply the spirit of the Privacy Act 2020 — and the transparency demands of the Farm Data Code of Practice — to the parts of farm data the law does not directly reach. We think every platform that handles farm data should hold itself to a similar standard, and we publish our framework openly so that other organisations can borrow it, push back against it, or improve on it.

---

## What Farmers Can Do About It Today

You do not need to wait for legislation to take control of your data. There are five things any farmer can do this month:

1. **Make a list of every platform, app, and service that holds data about your farm.** Include the obvious ones (farm management software, accounting software, satellite imagery) and the less obvious (processor portals, fertiliser company accounts, vet practice records, council compliance portals, bank dashboards).

2. **For each one, find the Terms of Service and the Privacy Policy.** They are usually linked from the bottom of the website or buried in the app's settings menu. Save them as PDFs so you have a record.

3. **Search those documents for the three trap phrases:** *perpetual licence*, *aggregate data*, and *export*. Read what the document says about each.

4. **Check whether the organisation is accredited under the Farm Data Code of Practice.** The accreditation register is at [farmdatacode.org.nz](https://www.farmdatacode.org.nz/). If they are not accredited, that is not necessarily a problem — but it is a question worth asking them directly.

5. **For any platform whose terms you do not understand or do not like, ask the company to explain them in plain language.** Reputable platforms will. If they will not, that is information.

---

## Frequently Asked Questions

**Does the Privacy Act 2020 protect my farm data?**
The Privacy Act 2020 protects personal information about identifiable individuals. It covers your name, contact details, IRD number, NAIT number, and similar personal records held by farm software companies and processors, and may also cover farm-related information where that information can reasonably be linked back to you as an identifiable individual. It does not clearly cover most pure operational farm data — soil test results, paddock boundaries, satellite imagery histories, or grazing records — which describes the property rather than a person. For that data, your contracts with each platform are what determine ownership and use rights.

**Is there a New Zealand law that says the farmer owns farm data?**
No. There is no single statute in New Zealand that establishes farm data ownership or grants farmers a general proprietary right in their farm's operational data. The closest mechanism is the voluntary Farm Data Code of Practice, which requires accredited organisations to clearly disclose their data ownership and sharing policies but does not prescribe what those policies must say.

**What is IPP 3A and why does it matter for farmers?**
IPP 3A is a new Information Privacy Principle added to the Privacy Act 2020 by the Privacy Amendment Act 2025. It comes into force on 1 May 2026. IPP 3A creates new notification obligations for organisations that collect personal information from a source other than the individual themselves — for example, a farm software platform that receives farmer information from a bank, council, processor, or consultant rather than from the farmer directly. From 1 May 2026, organisations that collect farmer information indirectly will generally need to notify the farmer that they have done so. This is a meaningful change for the agri-tech sector, where indirect collection is common.

**What is the Farm Data Code of Practice?**
The Farm Data Code of Practice is a voluntary New Zealand accreditation scheme developed and supported by pastoral sector organisations including Beef+Lamb NZ, DairyNZ, Federated Farmers, the New Zealand Veterinary Association, the Dairy Companies Association of New Zealand, the Meat Industry Association, and Te Tumu Paeroa. Operational since 2016, it requires accredited organisations to disclose their farm data rights, processing, sharing, and storage policies in plain language. The Code is a transparency and assurance mechanism, not an ownership rule.

**What should I look for in farm software terms and conditions?**
Look for three things. First, any "perpetual, irrevocable, royalty-free licence" the company grants itself to use your data — this gives them broad control regardless of who "owns" the data on paper. Second, "aggregate" or "anonymised" data carve-outs that allow the company to sell or share derived data with third parties. Third, the absence of any clause about data export or portability — if there is no documented way to take your data with you when you leave, you do not have practical ownership.

**Can I get my data out of a farm software platform if I want to leave?**
That depends entirely on the platform's terms of service. Some platforms offer documented data export in machine-readable formats. Others offer no export at all. Before signing up to any platform, ask explicitly whether they will give you your data back in a portable format if you cancel your subscription, and ask to see an example of what an export looks like.

**What does "farmer data sovereignty" mean?**
Farmer data sovereignty is the principle that the person who generates farm data — the farmer — should retain meaningful control over how that data is stored, used, and shared. In practice it means specific, informed, revocable, and visible consent for every use of the data, plus the right to export everything in a portable format at any time. It is a stronger standard than what New Zealand law currently requires, and it is the standard Atamai applies to itself.

**Does Atamai sell farmer data?**
No. Atamai does not sell raw farmer data and never will. Partner integrations operate on farmer-consented, structured, revocable connections — the farmer decides what gets shared, with whom, for what purpose, and can shut it off at any time. Our [vision and values post](/updates/land-has-memory-atamai-vision-values/) sets out the principles in full.

---

## A Note on Legal Advice

This post is a plain-language explanation of how farm data ownership works in New Zealand as we understand it, written by a non-lawyer for farmers and farm advisors. It is not legal advice. If you have a specific question about a contract you have signed or are about to sign, talk to a lawyer who understands both technology contracts and the New Zealand primary sector. The cost of a one-hour consult is almost always cheaper than the cost of finding out, three years later, that you signed away rights you did not know you had.

For authoritative guidance on the Privacy Act 2020 specifically, the [Office of the Privacy Commissioner](https://www.privacy.org.nz/) is the official source.

---

## About the Author

Erik Kiaer is co-founder of Atamai, a farm compliance and data platform for New Zealand pasture-based farmers built on the principle that the environmental record of a property is a data asset the farmer owns. Atamai's [vision and values post](/updates/land-has-memory-atamai-vision-values/) sets out in full what the company will and will not do with farmer data.

---

*This post is Version 1.0, published 26 April 2026. It will be updated as New Zealand's legal and regulatory landscape evolves — including a planned refresh on or shortly after 1 May 2026 when IPP 3A comes into force. If you spot something we have got wrong, or if you have a contract clause you would like a second opinion on, get in touch via the [contact page](/contact/).*
