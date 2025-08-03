// Reusable FeatureCard Component
declare interface FeatureCardProps {
    icon: React.ReactNode; // Can be an SVG, an image, or any React node
    title: string;
    description: string;
}

declare interface FundingFormData {
    fundingAmount: number;
    fundingPurpose: string;
    important: string;
    annualTurnover: number;
    over3Years: boolean;
    homeOwnerInUk: boolean;
}

declare interface ContactFormData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

// Define the props for the TestimonialCard component
declare interface TestimonialCardProps {
    quote: string;
    author: string;
    title: string;
    imageUrl: string; // Add imageUrl prop for the main image
}

declare interface StatisticCardProps {
    value: string;
    label: string;
}

// Define the structure for a breadcrumb item.
declare interface BreadcrumbItem {
    label: string;
    path: string;
}

// This ensures type safety when using TypeScript (TSX).
declare interface NextButtonProps {
    onClick: () => void;
    next?: boolean;
    value: string;
    cls?: string;
    disabled?: boolean;
}

declare interface CheckProps {
    purpose: string;
    fundingPurpose: string;
    handlePurposeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Define the props for the FooterSection component
declare interface FooterSectionProps {
    title: string;
    links: { name: string; href: string }[];
}

// Define the props for the SocialIcon component
declare interface SocialIconProps {
    href: string;
    icon: React.ReactNode; // ReactNode allows passing Lucide icons directly
    ariaLabel: string; // Accessibility label for the icon
}

declare interface FormProps {
    currentForm: number;
    setCurrentForm: (arg0: number) => void;
    formValue: FundingFormData;
    setFormValue: any;
}

declare interface NavItem {
    id: number;
    href: string;
    text: string;
    status: string;
}

// Reusable JobCard Component
declare interface JobCardProps {
    job: JobListing;
}

// Define the structure for a job listing
declare interface JobListing {
    title: string;
    description: string;
    type: string; // e.g., "Business", "Engineering"
    location: string; // e.g., "London, United Kingdom"
}

// Define types for navigation items
declare interface SubMenuItem {
    name: string;
    href: string;
}

declare interface NavItem {
    name: string;
    href?: string;
    dropdown?: boolean;
    submenu?: SubMenuItem[];
}

// Reusable MenuItem Component
declare interface MenuItemProps {
    item: NavItem;
    isMobile?: boolean;
}

declare interface TitleWrapperProps {
    title: string;
    summary: string;
}

// Define the props for the NumberedStep component
declare interface NumberedStepProps {
    number: number;
    title: string;
    description: string;
}// Define the props for the main BusinessFinanceSection component
declare interface BusinessFinanceSectionProps {
    title: string;
    subtitle: string;
    steps: Array<{
        number: number;
        title: string;
        description: string;
    }>;
    imageUrl: string;
    imageAlt: string;
}

// Reusable StatCard Component
declare interface StatCardProps {
    value: string;
    description: string;
}

// Define the type for a testimonial
declare interface Testimonial {
    id: number;
    logo: string; // URL or path to the client logo
    quote: string;
    author: string;
    title: string;
}

// Reusable TeamMemberCard Component
declare interface TeamMemberCardProps {
    member: TeamMember;
}

// Define the structure for a team member
declare interface TeamMember {
    name: string;
    title: string;
    description?: string; // Optional description for some roles
    imageSrc: string; // Placeholder for image URL
}

declare interface GetLenders {
    id: string;
    lender_name: string;
    min_lending: number;
    max_lending: number;
    lower_lending_rate: string;
    higher_lending_rate: string;
    per_month_or_factor_rate: string;
    min_term_months: number;
    max_term_months: number;
    payout_time: string;
}


declare interface ContactInfo {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
}
