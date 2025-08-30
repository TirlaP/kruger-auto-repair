# Website Implementation Guide - John Kruger Automotive

## 🚀 Quick Start Instructions

This guide contains all the specific information for John Kruger Automotive. Use this filled-out version to update the corresponding files in the codebase.

---

## 📋 Business Information

### Basic Details
- **Business Name**: `John Kruger Automotive` 
  - (Also known as: Kruger Auto Repair)
- **Domain**: `johnkrugerautomotive.com`
- **Tagline/Slogan**: `Honda, Toyota & Subaru Specialists`
- **Main Value Proposition**: `Quality auto repairs with 22 years of experience and nationwide warranty`

### Contact Information
- **Phone Number**: `(801) 483-3040`
- **Email**: `johnkrugerautomotive@gmail.com`
- **Address**: `301 West 1600 South, Salt Lake City, UT 84115`

### Business Hours
```
Monday: 9:00 AM - 5:30 PM
Tuesday: 9:00 AM - 5:30 PM  
Wednesday: 9:00 AM - 5:30 PM
Thursday: CLOSED
Friday: 9:00 AM - 5:30 PM
Saturday: CLOSED
Sunday: CLOSED
```

### Social Media Links
- **Facebook**: `https://www.facebook.com/johnkrugerautomotive`
- **Instagram**: `(Not provided)`
- **Twitter/X**: `(Not provided)`
- **LinkedIn**: `(Not provided)`

---

## 🏠 Homepage Sections

### 1. HERO SECTION (`src/components/Home/Hero.tsx`)
**Main Headline**: 
```
Line 1: HONDA, TOYOTA & SUBARU
Line 2: SPECIALISTS IN SALT LAKE CITY
Line 3: SINCE 2003
```

**Subheadline**:
```
Quality auto repairs with 22 years of experience. Nationwide warranty on all work. Specializing in cars from 2006-Now.
```

**Background Image**: `/images/image-29.png` → `<automotive repair shop image>`

### 2. ABOUT SECTION (`src/components/Home/About.tsx`)
**Title**: 
```
KRUGER AUTO REPAIR SERVES SALT LAKE CITY
```

**Main About Text**:
```
For the last 22 years, John Kruger has been performing quality auto repairs and regular maintenance services for satisfied customers throughout Salt Lake City and surrounding communities. John decided in 2003 to create a new standard for automotive service along the Wasatch Front, inspiring confidence, trust, and fairness. We specialize in Honda, Toyota, and Subaru vehicles from 2006 to current models.
```

**Key Features** (3 items):
1. **Feature 1 Title**: `Honda, Toyota & Subaru Experts`
   - Description: `We specialize in these three brands and know them inside and out. Our technicians have years of experience working specifically with these makes and models.`

2. **Feature 2 Title**: `Nationwide Warranty Coverage`
   - Description: `As a certified Bumper to Bumper service center, we provide a nationwide warranty on limited parts and labor for 24 months or 24,000 miles.`

3. **Feature 3 Title**: `Complete Customer Convenience`
   - Description: `We offer free shuttle service, 24-hour key drop, comfortable waiting area with Wi-Fi, and roadside assistance warranty for your peace of mind.`

### 3. SERVICES SECTION (`src/lib/mock-data.ts` - service1_data)
Update the main services (4 items):

1. **Service 1**: 
   - Title: `Specialty Subaru Services`
   - Description: Head gaskets, coolant leaks, catalytic converter repairs

2. **Service 2**: 
   - Title: `Engine Diagnostics & Repair`
   - Description: Complete engine services and diagnostic testing

3. **Service 3**: 
   - Title: `Brake Service & Repair`
   - Description: Complete brake system inspection and repair

4. **Service 4**: 
   - Title: `Maintenance & Oil Changes`
   - Description: Regular maintenance and preventive services

### 4. WHY CHOOSE US (`src/lib/mock-data.ts` - features1_data)
Update the 4 key differentiators:

1. **Differentiator 1**:
   - Title: `ASE Certified Technicians`
   - Description: `Our qualified technicians are ASE certified with years of experience in the automotive service field.`

2. **Differentiator 2**:
   - Title: `24-Month Nationwide Warranty`
   - Description: `We back our work with a comprehensive 24-month/24,000-mile nationwide warranty on parts and labor.`

3. **Differentiator 3**:
   - Title: `Honda, Toyota, Subaru Specialists`
   - Description: `We specialize in these three brands and have extensive experience with models from 2006 to present.`

4. **Differentiator 4**:
   - Title: `Honest & Trustworthy Service`
   - Description: `Since 2003, we've built our reputation on honesty, integrity, and fair pricing for all our customers.`

### 5. STATISTICS (`src/components/Home/WhoChooseUs.tsx`)
Update achievement numbers:
- **Stat 1**: `22+` `Years Experience`
- **Stat 2**: `98%` `Customer Satisfaction`
- **Stat 3**: `500+` `Subaru Head Gaskets Completed`
- **Stat 4**: `10K+` `Vehicles Serviced`

### 6. CONTACT FORM (`src/components/Home/GetInTouchForm.tsx`)
**Form Title**: `SCHEDULE YOUR SERVICE TODAY`

**Form Description**: 
```
Ask us your car questions or schedule your Honda, Toyota, or Subaru service. Call us at (801) 483-3040 or send us a message below.
```

### 7. FOOTER (`src/components/Home/Footer.tsx`)
**Newsletter Text**: 
```
Stay updated with maintenance tips and special offers from Kruger Auto Repair.
```

**Copyright**: 
```
Copyright © 2025 John Kruger Automotive - All Rights Reserved.
```

---

## 📄 Additional Pages Content

### Services Page
**Detailed Service List**:
```
SPECIALTY SERVICES:
- Subaru Head Gasket Repair: Complete head gasket replacement with upgraded parts
- Subaru Coolant Leak Repair: Diagnosis and repair of coolant system leaks
- Catalytic Converter Replacement: P0420 code diagnosis and converter replacement

ROUTINE MAINTENANCE:
- Oil Changes: Full service oil changes with multi-point inspection
- Brake Service: Complete brake system inspection and repair
- Engine Diagnostics: Computer diagnostic testing and repair
- Transmission Service: Automatic and manual transmission repair
- Utah Safety Inspections: State required safety inspections
- Wheel Alignments: Precision wheel alignment service

ADDITIONAL SERVICES:
- Air Conditioning Service: Complete A/C system service and repair
- Battery & Charging System: Battery testing and replacement
- Belts & Hoses: Serpentine belt and cooling hose replacement
- Tire Services: Tire rotation and replacement
```

### About Page
**Extended Company Story**:
```
John Kruger Automotive has been serving Salt Lake City and surrounding communities since 2003. Owner John Kruger founded the business with a simple mission: to provide honest, trustworthy automotive service with the highest levels of integrity.

After years working in the auto repair industry, John noticed a lack of honesty and professionalism among many shops. He wanted to create a new standard for automotive service along the Wasatch Front - one that would inspire confidence, trust, and fairness in every customer interaction.

Today, we're known as the premier Honda, Toyota, and Subaru specialists in the area. We've completed hundreds of Subaru head gasket repairs and have extensive experience with the unique needs of these three brands. As a certified Bumper to Bumper service center and part of the Federated Car Care program, we provide nationwide warranty coverage and maintain the highest standards of service.
```

### Contact Page
**Additional Location Details**:
- Parking Information: `On-site parking available`
- Landmark References: `Located on West 1600 South between State Street and Main Street`
- Special Instructions: `24-hour key drop available for after-hours drop-off`

---

## 🎨 Brand Customization

### Colors (Update in `tailwind.config.ts`)
- Primary Color: `#DC2626` (Red - automotive industry standard)
- Secondary Color: `#1E3A8A` (Dark Blue)
- Accent Color: `#F59E0B` (Amber/Orange)

### Fonts (Update in `src/app/layout.tsx`)
- Heading Font: `Orbitron` (Current - keep)
- Body Font: `DM Sans` (Current - keep)

### Logo
- Replace logo file at: `public/logo.png`
- Dimensions: `Standard automotive service logo dimensions`

---

## 📝 SEO & Metadata (`src/app/layout.tsx`)

**Page Title Template**: 
```
%s - John Kruger Automotive
```

**Default Title**: 
```
John Kruger Automotive - Honda, Toyota & Subaru Specialists in Salt Lake City
```

**Meta Description**: 
```
Honda, Toyota & Subaru specialists in Salt Lake City since 2003. 22 years experience, ASE certified technicians, nationwide warranty. Expert Subaru head gasket repair.
```

---

## ✅ Implementation Checklist

1. [x] Replace all business information placeholders
2. [ ] Update Hero section text and image
3. [ ] Customize About section content
4. [ ] Update all service offerings
5. [ ] Modify "Why Choose Us" features
6. [ ] Update statistics/achievements
7. [ ] Customize contact information
8. [ ] Update footer content
9. [ ] Replace logo and brand colors (if needed)
10. [ ] Update SEO metadata
11. [ ] Replace all placeholder images in `/public/images/`
12. [ ] Test all contact forms with new email
13. [ ] Verify all phone numbers are clickable
14. [ ] Check Google Maps integration with new address

---

## 🔄 Key Information Summary

**Owner**: John Kruger
**Established**: 2003 (22 years)
**Specialty**: Honda, Toyota, Subaru (2006-Now)
**Unique Selling Points**: 
- Subaru head gasket specialists (hundreds completed)
- 24-month/24,000-mile nationwide warranty
- ASE certified technicians
- Free shuttle service & 24-hour key drop
- Honest, trustworthy service since 2003

**Service Area**: Salt Lake City, Holladay, Bountiful, UT and surrounding areas

---

**Implementation Date**: 2025-08-30
**Client**: John Kruger Automotive