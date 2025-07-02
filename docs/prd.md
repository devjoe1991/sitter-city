# Sitter City: Product Requirements Document

## 1. Introduction
This document outlines the product requirements for the Sitter City platform. The project's scope is to create a premium marketplace connecting parents with elite, vetted nannies in London. This document covers user personas, functional requirements for the Minimum Viable Product (MVP), and key non-functional requirements.

## 2. User Personas

**Clara, the "Busy Professional"**
- **Role:** 38-year-old Corporate Lawyer, mother of two.
- **Goal:** To find a reliable, highly-vetted nanny for last-minute childcare when work meetings run late or for scheduled evening events.
- **Needs:** A very quick and easy booking process, absolute trust in the nanny's qualifications and background, seamless and cashless payment, and clear communication channels.
- **Pain Points:** Spends too much time searching for trustworthy sitters, feels anxious about leaving her children with someone who isn't thoroughly vetted, frustrated by the unprofessionalism of sitters found on generic apps.

**The Wilsons, the "Affluent Tourists"**
- **Role:** A family on vacation in London from the United States.
- **Goal:** To secure a trustworthy, experienced nanny for their children so they can enjoy a West End show and a late dinner.
- **Needs:** The ability to book a nanny from their hotel with confidence, assurance of the nanny's qualifications and English proficiency, and a service that feels safe and integrated with their travel plans.
- **Pain Points:** The inherent difficulty and risk of finding trusted childcare in a foreign city, lack of transparency in sitter qualifications, and safety concerns.

**Sophie, the "Elite Nanny"**
- **Role:** 29-year-old professional, self-employed nanny with 10+ years of experience.
- **Goal:** To find flexible, well-paid nannying jobs with respectful, professional families without the administrative overhead of marketing herself and chasing payments.
- **Needs:** An easy-to-use platform to manage her availability, secure and prompt payments, clear job details, and a platform that respects and showcases her professionalism and experience.
- **Pain Points:** Inconsistent client flow, chasing late payments, dealing with families who do not respect her professional boundaries, and time spent on administrative tasks instead of childcare.

## 3. Features & Functional Requirements

### 3.1. MVP Features
| Feature ID | Name | Description | User Story | Priority |
|------------|------|-------------|------------|----------|
| F-01 | Dual-Role Authentication | Secure sign-up and login for both Parents (Users) and Nannies. Role selection at signup. | "As a new user, I want to sign up as either a Parent or a Nanny so that I can access the correct platform features." | Must-Have |
| F-02 | Nanny Profile | Nannies can create and manage a detailed profile including bio, photo, experience, qualifications, and hourly rate. | "As a Nanny, I want to create a compelling profile so that I can attract high-quality job offers from parents." | Must-Have |
| F-03 | Parent Dashboard | After logging in, parents can view their booking history, manage saved payment methods, and edit their profile. | "As a Parent, I want a personal dashboard where I can easily manage my childcare arrangements and payments." | Must-Have |
| F-04 | Nanny Dashboard | After logging in, nannies can manage their availability calendar, view upcoming/past jobs, and track their earnings. | "As a Nanny, I want a dashboard to manage my work schedule and finances so that I can stay organized." | Must-Have |
| F-05 | Search & Filter | Parents can search for available nannies based on date and time. | "As a Parent, I want to search for nannies who are available for a specific time so that I can find someone for my needs quickly." | Must-Have |
| F-06 | Booking System | Parents can send a booking request to a nanny for a specific time slot. The nanny can accept or decline. | "As a Parent, I want to send a booking request to my chosen nanny so that I can secure their services." | Must-Have |
| F-07 | Secure Payment Integration | Integration with Stripe to handle all payments. Parents add a card on file, and payments are processed automatically after a booking is completed. | "As a Parent, I want to pay securely through the platform so that I don't have to handle cash or worry about transactions." | Must-Have |
| F-08 | Admin Nanny Vetting | An internal interface for the Sitter City team to review nanny applications, documents, and mark profiles as "Vetted". | "As an Admin, I want a system to manage and approve nanny applications so that we maintain a high standard of quality." | Must-Have |

### 3.2. Post-MVP Features
| Feature ID | Name | Description | User Story | Priority |
|------------|------|-------------|------------|----------|
| F-09 | In-App Messaging | Secure, real-time chat between parents and nannies. | "As a Parent, I want to chat with a nanny before confirming a booking so that I can ask specific questions." | High |
| F-10 | Reviews and Ratings | Parents and Nannies can rate and review each other after a completed booking. | "As a Parent, I want to see reviews from other families so that I can make a more informed decision." | High |
| F-11 | Advanced Search Filters | Add filters for specific skills (e.g., infant care, special needs), languages, etc. | "As a Parent, I want to filter nannies by specific qualifications so that I can find the perfect match for my child's needs." | Medium |


## 4. Non-Functional Requirements
- **Performance:** All critical pages, including search results and dashboards, must load in under 2 seconds.
- **Usability:** The booking process for a parent must be completable in under 3 minutes. The interface should be intuitive and require no formal training.
- **Security:** All user data, especially children's information and payment details, must be encrypted at rest and in transit. The platform must adhere to PCI DSS standards for payment processing.
- **Scalability:** The architecture must be able to support 10,000 active users and 500 concurrent booking requests without performance degradation.

## 5. Assumptions & Dependencies
- **Assumption:** Professional nannies are willing to join a new platform if it provides good earning potential and a professional environment.
- **Assumption:** A sufficient number of high-income parents and tourists in London are willing to pay a premium for a trusted service.
- **Dependency:** Successful integration with the Stripe API for payment processing is critical for platform launch.
- **Dependency:** The ability to perform legally compliant background checks on nannies in the UK.