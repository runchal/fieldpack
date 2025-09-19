# Fieldpack — Content Strategy & Instructions (for Claude)

> Use this as the single source of truth when drafting web, sales, and docs content. If a detail is unknown, write `[TBD]` and propose the minimum necessary assumption.

---

## 0) What Fieldpack Is (TL;DR for the model)
**Fieldpack** is a *battery system integration platform* that enables companies to build sub-scale battery packs with enterprise-grade telemetry, charge management, and fleet software. Think "the Twilio of battery systems": we provide the hardware/software integration layer so others can deploy custom battery solutions without building the entire stack from scratch.

**We sell the picks and shovels for the battery revolution.** The brand voice is calm, exact, and useful. No hype, no hero videos, no "save the planet." Focus on integration simplicity, data reliability, and operational excellence.

Primary buyers: OEMs, system integrators, equipment manufacturers, and companies building battery-powered products—anyone who needs to add intelligent battery systems to their offerings without years of R&D.

---

## 1) Positioning & Message

### One-line Positioning
**Fieldpack is the integration platform that lets companies build intelligent battery systems with best-in-class telematics and charge management.**

### Category
- Primary: *Battery system integration platform*
- Alt: *Hardware/software platform for intelligent BESS development*

### Differentiators
- **Full-stack integration**: BMS, telemetry, charge controllers, and cloud platform in one solution.
- **Sub-scale friendly**: Build battery packs from 1 kWh to 100 kWh with the same enterprise features.
- **Developer-first**: SDKs, APIs, and documentation that let partners integrate quickly.
- **Production-ready**: Not a prototype platform—built for commercial deployment at scale.

### Value Props by Persona
- **Product Engineers**: Skip years of battery R&D; focus on your core product differentiation.
- **CTOs/Engineering Leaders**: De-risk battery integration with proven, scalable infrastructure.
- **Operations Teams**: Real-time fleet visibility, predictive maintenance, and usage analytics.
- **Business Leaders**: Faster time-to-market, lower development costs, recurring software revenue potential.

---

## 2) Mission, Vision, Principles

### Mission
**Democratize intelligent battery systems.** Give companies the building blocks to create custom battery solutions with world-class software integration.

### Vision
A world where any company can build intelligent battery products as easily as they build web applications today.

### Operating Principles (use these in copy when helpful)
- **Reliability beats novelty.**
- **Software is the product; hardware is leverage.**
- **Mundane is a feature** (routine, safe, repeatable).
- **Field first**: real work happens outdoors; design for gloves, dust, and deadlines.

---

## 3) Product Overview

### The Platform (software)
- **BMS Integration**: Complete battery management system with cell balancing, thermal management, and safety monitoring.
- **Telemetry Core**: Real-time voltage, current, temp, SOC, cycle count, health metrics; predictive analytics.
- **Fleet Dashboard**: Monitor deployed systems, usage patterns, performance metrics, maintenance alerts.
- **APIs & SDKs**: RESTful APIs, WebSocket streams, Python/JS/Go SDKs; Grafana/Prometheus compatible.
- **Charge Management**: Multi-chemistry support, adaptive charging profiles, grid integration capabilities.
*(Platform designed for rapid integration—typical deployment in weeks, not months.)*

### Hardware Components (reference designs)
- **Modular BMS boards** supporting LFP/NMC/LTO chemistries, 12V-800V configurations
- **Integrated charge controllers** with CAN/ModBus communication, thermal management
- **Reference pack designs** from 1 kWh to 100 kWh with full CAD/BOM documentation
*(Components are customizable per partner requirements—base specs available on request.)*

### Core Use Cases
- Mobile equipment manufacturers adding battery options to their product lines
- Solar/renewable integrators building custom storage solutions
- Industrial OEMs electrifying their equipment portfolios
- Startups building battery-powered products without in-house battery expertise
- System integrators creating bespoke energy storage solutions for clients

---

## 4) Content Strategy

### Goals
1) Establish Fieldpack as the go-to platform for battery system integration.
2) Drive qualified leads from OEMs, integrators, and equipment manufacturers.
3) Educate: build vs buy, integration patterns, and platform capabilities.

### Pillars & Proof
- **Integration Speed**: Weeks not years to market. *Proof*: Integration timelines, case studies, SDK examples.
- **Scale Flexibility**: 1 kWh to 100 kWh, same platform. *Proof*: Reference designs, partner deployments.
- **Data Intelligence**: Real-time telemetry, predictive analytics. *Proof*: Dashboard screenshots, API docs.
- **Production Ready**: Not prototypes—commercial deployments. *Proof*: Deployed units, uptime metrics.

### Tone/Voice
- Calm, specific, direct. Avoid puffery. Prefer numbers to adjectives. Use short sentences.

### Banned/Flagged Terms
- ❌ “Save the planet,” “AI-powered” (unless feature-specific), “revolutionary,” “disruptive.”
- ❌ “Gas generator killer.”
- ✅ “Quiet, managed power,” “observability,” “fleet logic,” “ops tooling,” “SOP.”

### SEO (starter set)
- battery management system integration, BMS platform, battery telemetry software, BESS development platform,
  battery pack design software, energy storage integration, battery fleet management API, modular BMS

### Content Cadence (suggested)
- **Monthly**: 1 customer story, 1 “Ops Note” (how-to), 1 platform update.
- **Quarterly**: comparison/TEI style post (diesel vs battery TCO), safety/standards digest.

---

## 5) Site Map & Page Briefs

### IA
- Home
- Platform (Software)
- Hardware (Wedges)
- Use Cases (Film/Events/Muni/Contractors)
- Safety & Compliance
- Pricing
- Developers (Docs/API)
- About
- Careers

#### Home — Brief
**Job**: Credibility fast + route to RFQ.
**Hero**: Headline + subhead + single primary CTA. No autoplay video.
**Blocks**: Value props (3), “How it works,” social proof, screenshots, CTA.

*Hero examples*
- **Headline**: “Quiet power you can manage.”
- **Subhead**: “Book, monitor, and bill mobile batteries like a fleet.”
- **CTA**: “Get a quote”

#### Platform — Brief
Explain console, telemetry, alerts, billing, APIs. Include 2–3 annotated screenshots, endpoint list, and data export examples.

#### Hardware — Brief
Describe wedges without over-promising. Show ports, runtime **at common loads** (include assumptions). Safety labeling callouts.

#### Use Cases — Brief
Per vertical: pains → workflow → before/after → starter bundle → CTA to talk to ops.

#### Safety & Compliance — Brief
SOPs, site prep, storage, training, signage, isolation, labeling. “Designed to streamline UL 9540 ecosystems.” Link to downloadable checklists.

#### Pricing — Brief
Simple: *Starter* (per-rental + metered kWh), *Ops* (monthly + metered), *Fleet* (custom). Show what’s included. Don’t post hard rates if volatile; use “Get a quote.”

#### Developers — Brief
API overview (auth, rate limits), Events, Assets, Telemetry, Webhooks. Curl examples + Postman collection notes. Make CSV import rules explicit.

#### About — Brief
Why Fieldpack exists, team credibility, LA roots, “real work happens outdoors.”

#### Careers — Brief (Embedded SW Eng)
Problem, impact, stack (RTOS, CAN/I2C/SPI/UART, OTA, cloud), what success looks like in 90 days. Keep it crisp and real.

---

## 6) Boilerplate, Pitches, Taglines

**Company Boilerplate (short)**
Fieldpack is a battery system integration platform that enables companies to build sub-scale battery packs with enterprise-grade telematics and charge management. We provide the hardware/software building blocks so partners can create custom battery solutions without years of R&D.

**10-second Pitch**
The complete platform for building intelligent battery systems—BMS, telematics, and software in one solution.

**30-second Pitch**
Fieldpack provides everything you need to build intelligent battery systems—from BMS hardware to cloud telemetry. Companies use our platform to add battery options to their products in months instead of years, with world-class charge management and fleet software built in. Think of us as the integration layer between raw battery cells and your finished product.

**Tagline Options**
- Build better batteries, faster.
- The integration platform for intelligent battery systems.
- From cells to software in one platform.
- Your battery system, our infrastructure.

---

## 7) Objections & Answers (for FAQ/sales pages)

- **"Why not build our own BMS?"**
  Building a production-ready BMS takes 18-24 months and $2M+ in engineering. We give you enterprise features in weeks, not years.

- **"What chemistries do you support?"**
  LFP, NMC, LTO out of the box. Custom chemistry profiles available. Our platform adapts to your cell choice.

- **"Can this scale to production?"**
  Yes. This isn't a prototype platform. Our partners have thousands of units in the field with 99.9% uptime.

- **"How does integration work?"**
  We provide SDKs, reference designs, and engineering support. Typical integration: 2-4 weeks for POC, 8-12 weeks to production.

---

## 8) Style & Guardrails (Claude must follow)

**Do**
- Use short sentences and concrete nouns.
- Surface assumptions and show working (e.g., “Assuming 1.2 kW average for 4h → 4.8 kWh”).
- Prefer specifics over superlatives.
- Insert `[TBD]` for unknowns; never invent specs or certifications.

**Don’t**
- Promise UL listings, subsidies, or zero emissions claims.
- Use filler (“unlock,” “revolutionary,” “disruptive”).
- Use autoplay hero videos or buzzwords without context.

**Format**
- Use descriptive H2/H3s; bullets over walls of text.
- Include one CTA per section.
- Where helpful, add a one-line “Why it matters.”

---

## 9) Reusable Copy Blocks (snippets Claude can reuse)

**How It Works (3 steps)**
1) **Book**: Tell us when/where, estimated load, and runtime.
2) **Deploy**: Drop-off, quick safety check, plug and go.
3) **Manage**: Live SOC and alerts; metered billing; simple pickup.

**Starter Bundle (example)**
- (1×) 8 kWh cart `[SPEC TBD]`
- (2×) 20 A circuits (NEMA 5-20)
- 50 ft cables, GFCI where applicable
- Delivery + pickup windows

**Safety Note (microcopy)**
Keep units shaded and dry. Maintain 3 ft clearance for airflow. Follow on-device labels and SOP.

---

## 10) Page Templates (Claude, fill these)

### Homepage Hero
- **H1**: `[Outcome in 4–6 words]`
- **Subhead**: `Manage mobile power like a fleet—book it, see it, bill it.`
- **CTA**: `Get a quote`
- **Backup CTA**: `See the console`

### Case Study
- **Context**: who/where/what
- **Constraint**: time/noise/permits
- **Approach**: assets + workflow
- **Outcome**: hours saved, avoided fuel runs, complaints averted `[TBD]`
- **Proof**: quote + metrics

### Product Section (feature)
- **Feature**: name
- **Why it matters**: one sentence
- **What you get**: bullets (console view, alert types, export paths)
- **CTA**: see docs / talk to ops

---

## 11) Developers Section (outline Claude must draft)

- **Auth**: token header, scopes `[TBD]`
- **Entities**: Assets, Jobs, Telemetry, Alerts, BillingRecords
- **Endpoints**:
  - `GET /v1/assets` (filters: status, location)
  - `GET /v1/assets/{id}/telemetry?from=&to=`
  - `POST /v1/jobs` (schedule drop/pick)
  - `POST /v1/webhooks` (events: soc_low, job_created, alert)
- **CSV Import**: de-dupe on `(asset_id, timestamp, metric)`; reject future timestamps; unit normalization.
- **Rate Limits & Retries**: `[TBD]`
- **Examples**: curl + JSON responses.
- **SDKs**: `[TBD]`

---

## 12) Pricing Framework (no hard numbers)
- **Starter**: per-rental fee + metered kWh + logistics.
- **Ops**: monthly fee (console + alerts) + metered kWh.
- **Fleet**: custom (APIs, SLAs, multi-site).
*Always note what’s included: delivery windows, setup check, dashboard seats.*

---

## 13) Compliance & Claims Guidance
- Say: “Designed to streamline compliance workflows (e.g., UL 9540 ecosystems).”
- Don’t say: “UL certified” unless it’s true and current.
- Prefer: “quiet,” “low-noise,” “no on-site fumes” (avoid absolute “zero” claims).

---

## 14) Quick FAQ (seed list)
- Runtime depends on **average load**, not nameplate. We’ll help estimate.
- Yes, you can parallel units or schedule swaps.
- Telemetry requires cell coverage; we buffer and backfill on reconnect.
- We support CSV uploads if your device exports logs; we de-dupe and merge.

---

## 15) Internal Notes for Claude (meta-instructions)
- If a request mixes **platform** and **wedge** topics, lead with software, then show a concrete wedge bundle to anchor reality.
- Prefer LA-first examples (film sets, parks like Kenneth Hahn, events on the Westside) when local color helps.
- When showing math, **show assumptions** and keep units explicit (W, kWh, A).
- Use comparisons sparingly: 1 clear table > 3 paragraphs.
- If user asks for “moving hero,” suggest a crisp still with annotated UI instead.

---

## 16) Contact/CTA Blocks (variants)

**Primary**
- *Get a quote* → short form (date, location, expected load, hours).

**Secondary**
- *See the console* → gated walkthrough or short screencap.
- *Talk to ops* → schedule 15 min.

---

## 17) Glossary (keep it practical)
- **BESS**: Battery Energy Storage System.
- **SOC**: State of Charge.
- **Wedge**: A focused hardware unit that proves platform value.
- **SOP**: Standard Operating Procedure.
- **AHJ**: Authority Having Jurisdiction.

---

## 18) Example Snippets (ready to paste)

**Short Social Post**
“Quiet power you can manage. Fieldpack lets you book, monitor, and bill mobile batteries like a fleet. LA pilots now open. → [link]”

**Email Opener**
“Putting a generator on set for a four-hour scene is overkill. With Fieldpack you book a battery like a prop: quiet in, quiet out—while your team sees SOC, alerts, and usage in one console.”

**Footer Boilerplate**
“© Fieldpack. Quiet, managed power for outdoor work.”

---

## 19) Final Checklist for Any Draft
- [ ] Lead with outcome, not tech.
- [ ] Avoid hype. Use one number or example.
- [ ] One CTA per section.
- [ ] Assumptions visible. Unknowns marked `[TBD]`.
- [ ] Consistent units and capitalization.

---
