# Website Implementation Guide - Text Content Replacement

## 🚀 Quick Start Instructions

This guide helps you quickly adapt the Liberty Auto SLC template to any automotive business. Replace the placeholder content below with your client's information, then update the corresponding files in the codebase.

---

## 📋 Business Information

### Basic Details
- **Business Name**: `<your business name here>` 
  - Current: FULTON AUTOmotive
- **Domain**: `<your domain here>`
  - Current: FULTONAUTOMOTIVE.COM
- **Tagline/Slogan**: `<your tagline here>`
  - Current: Auto Repair, Emissions Test, Oil Change
- **Main Value Proposition**: `<your main message here>`
  - Current: We offer quality repairs with years of experience

### Contact Information
- **Phone Number**: `<your phone here>`
  - Current: 8019354572
- **Email**: `<your email here>`
  - Current: FULTONAUTOMOTIVE3300@GMAIL.COM
- **Address**: `<your full address here>`
  - Current: 2755 E 3300 S, Salt Lake City, Utah 84109, United States

### Business Hours
```
<your business hours here>
Current:
Tuesday - Friday: 8am - 6pm
Saturday: 8am - 5pm
Sunday & Monday: Closed
```

### Social Media Links
- **Facebook**: `<your facebook url>`
- **Instagram**: `<your instagram url>`
- **Twitter/X**: `<your twitter url>`
- **LinkedIn**: `<your linkedin url>`

---

## 🏠 Homepage Sections

### 1. HERO SECTION (`src/components/Home/Hero.tsx`)
**Main Headline**: 
```
Line 1: <your hero line 1>
Line 2: <your hero line 2>
Line 3: <your hero line 3>
```
Current: CRAFTING CONFIDENCE IN REPAIR

**Subheadline**:
```
<your subheadline here>
```
Current: EXPERIENCE THE DIFFERENCE

**Background Image**: `/images/image-29.png` → `<your hero image>`

### 2. ABOUT SECTION (`src/components/Home/About.tsx`)
**Title**: 
```
<your about title here>
```
Current: LIBERTY AUTO REPAIRS IN SALT LAKE CITY

**Main About Text**:
```
<your about paragraph here - 3-4 sentences about the business, owner, and values>
```
Current: Come see me, Dave Fulton, for friendly, honest auto repair at fair prices. I've lived and worked in Millcreek for 20 years...

**Key Features** (3 items):
1. **Feature 1 Title**: `<your feature 1 title>`
   - Description: `<your feature 1 description>`
   - Current: Experienced Mechanics - We are dedicated to providing high-quality repairs...

2. **Feature 2 Title**: `<your feature 2 title>`
   - Description: `<your feature 2 description>`
   - Current: We Have You Covered - Whether you are coming in for a routine inspection...

3. **Feature 3 Title**: `<your feature 3 title>`
   - Description: `<your feature 3 description>`
   - Current: Our Quality Promise - We offer a 12 month 12,000 mile nation wide warranty...

### 3. SERVICES SECTION (`src/lib/mock-data.ts` - service1_data)
Update the main services (4 items):

1. **Service 1**: 
   - Title: `<service 1 name>`
   - Current: Oil Changes

2. **Service 2**: 
   - Title: `<service 2 name>`
   - Current: Brake Service

3. **Service 3**: 
   - Title: `<service 3 name>`
   - Current: Tune Ups

4. **Service 4**: 
   - Title: `<service 4 name>`
   - Current: General Auto Repair

### 4. WHY CHOOSE US (`src/lib/mock-data.ts` - features1_data)
Update the 4 key differentiators:

1. **Differentiator 1**:
   - Title: `<differentiator 1 title>`
   - Description: `<differentiator 1 description>`
   - Current: best technician

2. **Differentiator 2**:
   - Title: `<differentiator 2 title>`
   - Description: `<differentiator 2 description>`
   - Current: full warranty

3. **Differentiator 3**:
   - Title: `<differentiator 3 title>`
   - Description: `<differentiator 3 description>`
   - Current: domestic repair

4. **Differentiator 4**:
   - Title: `<differentiator 4 title>`
   - Description: `<differentiator 4 description>`
   - Current: client familiar

### 5. STATISTICS (`src/components/Home/WhoChooseUs.tsx`)
Update achievement numbers:
- **Stat 1**: `<number>` `<label>` (Current: 20K vehicle repaired)
- **Stat 2**: `<number>` `<label>` (Current: 15+ years experience)
- **Stat 3**: `<number>` `<label>` (Current: 98% happy customers)
- **Stat 4**: `<number>` `<label>` (Current: 5K+ services completed)

### 6. CONTACT FORM (`src/components/Home/GetInTouchForm.tsx`)
**Form Title**: `<your form title>`
Current: GET IN TOUCH

**Form Description**: 
```
<your form description>
```
Current: Send us a message letting us know what is going on with your vehicle...

### 7. FOOTER (`src/components/Home/Footer.tsx`)
**Newsletter Text**: 
```
<your newsletter signup text>
```
Current: Signup for our monthly newsletter to get the latest news.

**Copyright**: 
```
Copyright © <year> <your business name> - All Rights Reserved.
```

---

## 📄 Additional Pages Content

### Services Page
**Detailed Service List**:
```
SERVICE CATEGORY 1: <category name>
- <service 1>: <price/description>
- <service 2>: <price/description>
- <service 3>: <price/description>

SERVICE CATEGORY 2: <category name>
- <service 1>: <price/description>
- <service 2>: <price/description>

Current Example:
Routine Service:
- Oil Change: Includes checking fluids, tire pressure...
- Emissions Test: $40.00, On the spot renewal $10
- Safety Inspection: $30.00
```

### About Page
**Extended Company Story**:
```
<your full company story - 2-3 paragraphs>
Include: founding story, mission, values, team info
```

### Contact Page
**Additional Location Details**:
- Parking Information: `<parking details>`
- Landmark References: `<nearby landmarks>`
- Special Instructions: `<any special instructions>`

---

## 🎨 Brand Customization

### Colors (Update in `tailwind.config.ts`)
- Primary Color: `<hex code>` (Current: Red/Orange)
- Secondary Color: `<hex code>` (Current: Dark Blue)
- Accent Color: `<hex code>` (Current: Yellow)

### Fonts (Update in `src/app/layout.tsx`)
- Heading Font: `<font name>` (Current: Orbitron)
- Body Font: `<font name>` (Current: DM Sans)

### Logo
- Replace logo file at: `public/logo.png`
- Dimensions: `<recommended dimensions>`

---

## 📝 SEO & Metadata (`src/app/layout.tsx`)

**Page Title Template**: 
```
%s - <your business name>
```

**Default Title**: 
```
<your business name> - <your main value proposition>
```
Current: Liberty Auto SLC - Small neighborhood repair shop with the customer in mind

**Meta Description**: 
```
<your meta description - 150-160 characters>
```
Current: Small neighborhood repair shop with the customer in mind. Auto repair isn't cheap but it doesn't have to break the bank...

---

## ✅ Implementation Checklist

1. [ ] Replace all business information placeholders
2. [ ] Update Hero section text and image
3. [ ] Customize About section content
4. [ ] Update all service offerings
5. [ ] Modify "Why Choose Us" features
6. [ ] Update statistics/achievements
7. [ ] Customize contact information
8. [ ] Update footer content
9. [ ] Replace logo and brand colors
10. [ ] Update SEO metadata
11. [ ] Replace all placeholder images in `/public/images/`
12. [ ] Test all contact forms with new email
13. [ ] Verify all phone numbers are clickable
14. [ ] Check Google Maps integration with new address

---

## 🔄 Quick Replace Commands

After filling in all placeholders above, use these commands to quickly update the codebase:

```bash
# Example find and replace commands (adjust paths as needed)
grep -r "Liberty Auto" main-files/src/
grep -r "FULTON" main-files/src/
grep -r "801-941-1604" main-files/src/
grep -r "contact@libertyautoslc.com" main-files/src/
```

---

## 📌 Notes for AI Assistants

When implementing changes for a new client:
1. Start by collecting all information using the placeholders in this guide
2. Use the file paths provided to locate exact components
3. Maintain the existing component structure and styling
4. Only replace text content and images, not the code structure
5. Test that all dynamic features still work after text replacement
6. Ensure responsive design is maintained with new text lengths

---

**Last Updated**: 2025-08-30
**Template Version**: 1.0.0