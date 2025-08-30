# AI Implementation Prompt Template

## Copy and use this prompt when implementing the template for a new client:

---

```
I need you to adapt an automotive service website template for a new client. I will provide you with the client's information from their website/Facebook page, and you need to update the template according to the IMPLEMENTATION_GUIDE.md file.

## YOUR TASK:
1. Read the IMPLEMENTATION_GUIDE.md file located in the project root
2. Extract and organize the client information I provide below
3. Replace ALL placeholder markers in the guide with the client's actual information
4. Update the corresponding files in the codebase according to the guide's file paths
5. Ensure consistency across all sections

---
[Example: Copy everything from their website including:
- Business name and contact details
- About us section
- Services offered with prices
- Business hours
- Team/owner information
- Mission/values statements
- Customer testimonials
- Any special offers or warranties
- Social media links
]
---

## SPECIFIC REQUIREMENTS:

1. **Business Identity**: Extract and use the exact business name, tagline, and domain
2. **Services**: Map their services to the 4 main service cards, choosing the most important ones
3. **About Section**: Create a compelling about text using their story, keeping the personal touch
4. **Statistics**: If they don't provide specific numbers, use reasonable estimates based on:
   - Years in business → "X years experience"
   - Service quality → "98% customer satisfaction"
   - Services completed → Estimate based on years × average services per year
5. **SEO**: Create meta descriptions that include their location and main services
6. **Maintain Original Tone**: Keep the client's voice and personality from their original content

## IMPLEMENTATION STEPS:

Please follow this order:
1. First, create an updated version of IMPLEMENTATION_GUIDE.md with all placeholders filled
2. Then update these files in sequence:
   - src/app/layout.tsx (metadata)
   - src/components/Home/Hero.tsx (hero text)
   - src/components/Home/About.tsx (about content)
   - src/lib/mock-data.ts (services and features)
   - src/components/Home/Footer.tsx (contact info)
   - src/components/Home/WhoChooseUs.tsx (statistics)

## OUTPUT FORMAT:

After implementation, provide:
1. A summary of all changes made
2. Any content that couldn't be mapped directly and needs manual review
3. Suggestions for images that need to be replaced
4. List of any missing information that should be obtained from the client

Start by showing me the filled-out IMPLEMENTATION_GUIDE.md first, so I can review before you make the actual code changes.

## CLIENT INFORMATION:
[PASTE THE CLIENT'S WEBSITE/FACEBOOK CONTENT HERE]

```

---

## 📋 QUICK COPY VERSION (Simplified):

```
Please adapt the automotive website template for this new client using the IMPLEMENTATION_GUIDE.md file.

CLIENT INFO FROM WEBSITE/FACEBOOK:
[PASTE ALL CLIENT CONTENT HERE]

Instructions:
1. Read IMPLEMENTATION_GUIDE.md
2. Fill all <placeholder> markers with client's info
3. Update the source files listed in the guide
4. If information is missing, use reasonable defaults and mark for review

Show me the completed guide first before making code changes.
```

---

## 💡 TIPS FOR GATHERING CLIENT INFO:

Before using this prompt, collect from the client's website/Facebook:

### Essential Information:
- [ ] Business name and logo
- [ ] Phone number(s)
- [ ] Email address
- [ ] Physical address
- [ ] Business hours
- [ ] Website URL

### Content Sections:
- [ ] About Us / Our Story
- [ ] Complete services list with any prices
- [ ] Team/Owner information
- [ ] Mission statement or values
- [ ] Any warranties or guarantees offered
- [ ] Customer testimonials
- [ ] Special offers or promotions
- [ ] Social media links

### For Missing Information:
If the client doesn't provide certain information, use these defaults:
- Statistics: "15+ years experience", "1000+ satisfied customers", "5000+ services completed"
- Warranty: "12 month/12,000 mile warranty on all services"
- Newsletter text: "Stay updated with our latest services and special offers"

---

## 🎯 EXAMPLE USAGE:

```
Please adapt the automotive website template for this new client using the IMPLEMENTATION_GUIDE.md file.

CLIENT INFO FROM WEBSITE/FACEBOOK:

Joe's Auto Repair
"Your neighborhood mechanic since 1995"
Address: 123 Main St, Denver, CO 80202
Phone: (303) 555-0100
Email: service@joesautorepair.com
Hours: Mon-Fri 7:30am-6pm, Sat 8am-4pm, Closed Sunday

About: Joe's Auto Repair has been serving Denver for nearly 30 years. Founded by Joe Martinez, a third-generation mechanic, we pride ourselves on honest service and fair prices. Our ASE-certified technicians handle everything from oil changes to complete engine rebuilds.

Services:
- Oil Changes (Synthetic $59.99, Conventional $34.99)
- Brake Service (Starting at $149.99 per axle)
- Engine Diagnostics ($89.99)
- Transmission Service
- A/C Repair
- State Emissions Testing ($25)
- Pre-Purchase Inspections
- Fleet Services

We offer a 24-month/24,000 mile warranty on all repairs.

"Best mechanic in Denver! Joe fixed my car when two other shops couldn't figure out the problem." - Sarah M.

Instructions:
1. Read IMPLEMENTATION_GUIDE.md
2. Fill all <placeholder> markers with this client's info
3. Update the source files listed in the guide
4. Choose the 4 most important services for the service cards
5. If information is missing, use reasonable defaults and mark for review

Show me the completed guide first before making code changes.
```

---

## 📝 NOTES:
- Always provide as much client information as possible
- Include direct quotes from testimonials when available
- Preserve the client's unique voice and selling points
- If the client has special certifications (ASE, AAA, etc.), make sure to highlight them
- Keep track of any seasonal services or special offers they mention