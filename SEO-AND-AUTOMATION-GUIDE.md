# 8th Wonder — SEO, Images & Automation Guide

## 1. SEO Optimization for Australia

### ✅ Already Implemented
- Meta description with Queensland focus
- Open Graph tags for social sharing
- Geo tags for Australian region targeting
- Semantic HTML structure throughout

### 🚀 Next Steps for Better SEO

#### A. Google Business Profile (Critical!)
1. Create/claim Google Business Profile
2. Category: "Aerial Photographer" + "Video Production Service"
3. Service areas: Brisbane, Gold Coast, Sunshine Coast, Ipswich, Toowoomba, Logan, etc.
4. Add operating hours, phone, email
5. Upload drone photos to GBP regularly
6. Collect and respond to reviews

#### B. Local Citations
List the business on:
- **True Local** (truelocal.com.au)
- **Yellow Pages Australia** (yellowpages.com.au)
- **Hotfrog** (hotfrog.com.au)
- **Localsearch** (localsearch.com.au)
- **Australian Business Directory** (australianbusinessdirectory.com.au)

Ensure NAP (Name, Address, Phone) is **identical** across all listings.

#### C. Create Blog Content (Optional but powerful)
Add a `/blog` section with posts like:
- "5 Reasons Real Estate Agents Need Drone Photography in 2026"
- "How Aerial Mapping Saves Queensland Farmers Time and Money"
- "What to Expect When You Book a Drone Shoot in SEQ"
- "CASA Drone Regulations Explained for Australian Businesses"

Target long-tail keywords like:
- "best drone photographer Brisbane"
- "wedding drone videography Gold Coast"
- "construction aerial photography Queensland"

#### D. Structured Data (Schema.org)
Add JSON-LD schema to help Google understand the business. Create `public/schema.json`:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "8th Wonder",
  "description": "Professional drone photography and videography across South East Queensland",
  "url": "https://8thwonder.com.au",
  "telephone": "+61-400-000-000",
  "email": "hello@8thwonder.com.au",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Queensland",
    "addressCountry": "AU"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -27.4705,
      "longitude": 153.0260
    },
    "geoRadius": "150000"
  },
  "priceRange": "$$",
  "image": "https://8thwonder.com.au/hero-image.jpg"
}
```

#### E. Local Backlinks
- Partner with Queensland real estate agents, construction companies, event planners
- Guest post on local business blogs
- Join Queensland photography/videography associations
- Sponsor local events (get a link back)

---

## 2. Adding Your Brother's Footage

### Option A: Quick & Simple (Recommended to Start)

1. **Create an `images` folder in the project:**
   ```bash
   mkdir -p /Users/jazz/vibecodingstart/8th-wonder/public/images
   ```

2. **Organize by category:**
   ```
   public/
   ├── images/
   │   ├── hero-bg.jpg          (scenic aerial shot for hero background)
   │   ├── about-operator.jpg    (photo of your brother with drone)
   │   ├── portfolio/
   │   │   ├── construction-1.jpg
   │   │   ├── construction-2.jpg
   │   │   ├── realestate-1.jpg
   │   │   ├── realestate-2.jpg
   │   │   ├── events-1.jpg
   │   │   ├── events-2.jpg
   │   │   ├── agriculture-1.jpg
   │   │   └── agriculture-2.jpg
   ```

3. **Optimize images before uploading:**
   - Resize to reasonable dimensions (1920px wide max for hero, 800px for portfolio)
   - Compress using [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
   - Use `.webp` format for best performance
   - Keep file sizes under 200KB each

4. **Update the code:**

   **Hero.jsx** — Replace line 12:
   ```javascript
   backgroundImage: "url('/images/hero-bg.jpg')"
   ```

   **Portfolio.jsx** — Replace image URLs in the `portfolioItems` array:
   ```javascript
   {
     id: 1,
     category: 'Construction',
     title: 'Brisbane Infrastructure Project',
     image: '/images/portfolio/construction-1.jpg',
   },
   ```

   **About.jsx** — Replace line 26:
   ```javascript
   src="/images/about-operator.jpg"
   ```

### Option B: Cloud Hosting (For Better Performance)

Use **Cloudinary** (free tier: 25GB storage, 25GB bandwidth/month):

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Upload images to Cloudinary dashboard
3. Copy the auto-generated URLs
4. Use those URLs in the components

**Pros**: CDN delivery, automatic optimization, responsive images, video hosting
**Cons**: Requires account setup

---

## 3. Lead Generation & Automation Agents

### A. Email Automation (Recommended: EmailJS)

**Free tier**: 200 emails/month

1. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```

2. **Set up at [emailjs.com](https://emailjs.com):**
   - Create account
   - Create email service (Gmail, Outlook, etc.)
   - Create email template with these variables:
     - `{{from_name}}`
     - `{{from_email}}`
     - `{{phone}}`
     - `{{service}}`
     - `{{message}}`

3. **Update Contact.jsx:**
   ```javascript
   import emailjs from '@emailjs/browser';

   const handleSubmit = (e) => {
     e.preventDefault()

     emailjs.send(
       'YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID',
       {
         from_name: form.name,
         from_email: form.email,
         phone: form.phone,
         service: form.service,
         message: form.message,
       },
       'YOUR_PUBLIC_KEY'
     )
     .then(() => {
       setSubmitted(true)
     })
     .catch((error) => {
       console.error('Error:', error)
       alert('Something went wrong. Please email us directly.')
     })
   }
   ```

### B. CRM Integration (HubSpot Free CRM)

**HubSpot** has a free tier with:
- Contact management
- Deal pipeline
- Email tracking
- Forms

**How to integrate:**
1. Create HubSpot account
2. Use HubSpot's Form Embed or API
3. Leads from the website auto-create contacts in HubSpot
4. Set up automated email responses

### C. Chatbot for Instant Engagement

**Tawk.to** (100% free):
- Live chat widget
- Triggers: "Need a quote? We respond in 24 hours!"
- Capture name/email even when offline
- Mobile app to respond on the go

**Setup:**
1. Sign up at [tawk.to](https://tawk.to)
2. Get embed code
3. Add to `index.html` before `</body>`:
   ```html
   <script type="text/javascript">
   var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
   (function(){
   var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
   s1.async=true;
   s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
   s1.charset='UTF-8';
   s1.setAttribute('crossorigin','*');
   s0.parentNode.insertBefore(s1,s0);
   })();
   </script>
   ```

### D. Outreach Automation (Cold Email to Real Estate Agents)

**Tool: Lemlist or Instantly.ai**

**Campaign idea:**
1. Scrape email addresses of QLD real estate agents from agency websites
2. Create personalized email sequence:
   - Email 1: "I noticed [Agency Name] lists properties in [Suburb] — have you considered aerial photography?"
   - Email 2 (3 days later): "Here's how drone footage increased sales by 68% for similar agencies..."
   - Email 3 (5 days later): "Would you be open to a free sample shoot?"

3. Track opens, clicks, replies
4. Follow up with booked calls

**Legal note**: Make sure to comply with Australian Spam Act 2003 — include unsubscribe link, use business address.

### E. Google Analytics + Meta Pixel

**Google Analytics 4** (free):
- Track visitors, page views, conversions
- See which services get the most interest
- Understand traffic sources (Google, Facebook, direct, etc.)

**Meta Pixel** (free):
- Track conversions for Facebook/Instagram ads
- Build custom audiences for retargeting
- Measure ROI on paid ads

**Setup:**
Add tracking codes to `index.html` in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Meta Pixel -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

---

## 4. Deployment Checklist

Before going live:

- [ ] Replace all placeholder images with real footage
- [ ] Update phone number in Contact.jsx
- [ ] Update email in Contact.jsx
- [ ] Update social media links in Footer.jsx (or remove if not ready)
- [ ] Add Google Analytics tracking code
- [ ] Set up EmailJS for contact form
- [ ] Test contact form submission
- [ ] Add favicon (replace `/vite.svg` with custom logo)
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (aim for 90+ performance score)

---

## Quick Wins for Lead Gen

1. **Add a "Special Offer" banner**: "First-time clients: 15% off your first shoot"
2. **Social proof**: "200+ projects completed across SEQ"
3. **Fast response badge**: "We respond within 24 hours — guaranteed"
4. **Exit intent popup**: When user moves to close tab, show: "Wait! Get a free quote in 60 seconds"
5. **Testimonial videos**: Ask happy clients to record a 30-second video testimonial

---

## Tools Summary

| Tool | Purpose | Cost |
|------|---------|------|
| Google Business Profile | Local SEO | Free |
| EmailJS | Contact form emails | Free (200/mo) |
| Tawk.to | Live chat | Free |
| Cloudinary | Image/video hosting | Free (25GB) |
| Google Analytics | Traffic analytics | Free |
| Meta Pixel | Facebook ads tracking | Free |
| Vercel | Website hosting | Free |
| HubSpot CRM | Lead management | Free tier |
| Lemlist/Instantly | Cold email outreach | Paid (~$30/mo) |

---

Let me know which of these you'd like me to implement!
