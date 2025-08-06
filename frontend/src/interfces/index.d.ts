// Reusable FeatureCard Component
declare interface FeatureCardProps {
    icon: React.ReactNode; // Can be an SVG, an image, or any React node
    title: string;
    description: string;
}

declare interface FundingFormData {
    amount: string;
    reason: string;
    importance: string;
    turn_over: string;
    years_of_trading: string;
    home_owner: string;
}

declare interface ContactFormData {
    first_name: string;
    last_name: string;
    phone_number: string;
    business_name: string;
    business_type: string;
    email: string;
    token: string;
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
    reason: string;
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
    setFormValue: React.Dispatch<React.SetStateAction<FundingFormData>>;
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

declare interface GuideToBusinessNavigationNavItem {
    id: number;
    href: string;
    text: string;
    status: string;
}

declare interface NavItem {
    name: string;
    href?: string;
    dropdown?: boolean;
    submenu?: SubMenuItem[];
}

declare interface NavItem2 {
    id: number;
    href: string;
    text: string;
    status: string;
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

declare interface fundFormResponse {
    message: string,
    token: string
}

declare interface getLendersResponse {
    message: string,
    content: []
}


declare interface LendersResultsResponse {
    message: string;
    content: {
        lenders_list: Array<{
            id: string;
            lender_name: string;
            min_lending: number;
            max_lending: number;
            lower_lending_rate: number;
            higher_lending_rate: number;
            per_month_or_factor_rate: string;
            min_term_months: number;
            max_term_months: number;
            payout_time: string;
        }>;
    };
}

declare interface FunderSummaryProps {
    rateDescription: string;
    baseRate: string;
    nextMeetingMessage: string;
    bankIconUrl: string;
}