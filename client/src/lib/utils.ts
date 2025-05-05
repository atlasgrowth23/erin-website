import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const services = [
  {
    id: 1,
    title: "Comprehensive Care Coordination",
    slug: "care-coordination",
    description: "We assist with coordinating and ensuring quality care, whether your loved one is at home or transitioning to a facility.",
    icon: "clipboard-list",
    iconBgColor: "bg-primary/10",
    iconColor: "text-primary",
    benefits: [
      "Home and facility care assessment and coordination",
      "Assistance with finding appropriate care providers",
      "Ongoing monitoring and care plan adjustments"
    ],
    checkIconColor: "text-primary"
  },
  {
    id: 2,
    title: "Home Adaptation & Equipment",
    slug: "home-adaptation",
    description: "We assist with making homes safer and more accessible, including coordinating equipment and modifications for mobility and safety needs.",
    icon: "house-user",
    iconBgColor: "bg-secondary/10",
    iconColor: "text-secondary",
    benefits: [
      "Safety and accessibility evaluations",
      "Mobility equipment coordination",
      "Handicap-proofing recommendations and implementation"
    ],
    checkIconColor: "text-secondary"
  },
  {
    id: 3,
    title: "Family & Elder Support",
    slug: "family-support",
    description: "We provide emotional support to both elderly adults and their family members, and connect you with valuable community resources.",
    icon: "hands-heart",
    iconBgColor: "bg-primary/10",
    iconColor: "text-primary",
    benefits: [
      "Emotional support for families and elders",
      "Connection to community and VA resources for veterans",
      "Family meeting facilitation and guidance"
    ],
    checkIconColor: "text-primary"
  },
  {
    id: 4,
    title: "Personalized Engagement Planning",
    slug: "engagement-planning",
    description: "We learn about your loved one's history, interests, and preferences to create meaningful engagement plans and activity schedules.",
    icon: "calendar-alt",
    iconBgColor: "bg-secondary/10",
    iconColor: "text-secondary",
    benefits: [
      "Life history and interest exploration",
      "Customized activity plans and schedules",
      "Special focus on dementia engagement strategies"
    ],
    checkIconColor: "text-secondary"
  },
  {
    id: 5,
    title: "Dementia Support & Education",
    slug: "dementia-support",
    description: "We provide specialized support for families dealing with dementia, including education, strategies, and scheduling assistance.",
    icon: "brain",
    iconBgColor: "bg-primary/10",
    iconColor: "text-primary",
    benefits: [
      "Dementia care education for families",
      "Implementation of dementia-friendly scheduling",
      "Guidance on effective communication techniques"
    ],
    checkIconColor: "text-primary"
  }
];

export const valueProps = [
  {
    id: 1,
    title: "Comprehensive Elder Care Support",
    description: "We provide guidance for all aspects of elder care, from in-home solutions to facility transitions, tailored to your family's unique needs.",
    icon: "home",
    iconBgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    id: 2,
    title: "Personalized Engagement & Scheduling",
    description: "We get to know your loved one's history and interests to create meaningful activities and routines that enhance their quality of life.",
    icon: "calendar-heart",
    iconBgColor: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    id: 3,
    title: "Specialized Dementia Support",
    description: "Our focused approach includes education, engagement strategies, and structured schedules especially beneficial for those with dementia.",
    icon: "brain",
    iconBgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    id: 4,
    title: "Resource Connection",
    description: "We connect families with community resources, including special VA benefits assistance for veterans and their families.",
    icon: "hands-helping",
    iconBgColor: "bg-secondary/10",
    iconColor: "text-secondary"
  }
];

export const contactInfo = {
  phone: "228-860-6543",
  email: "contact@coastalgeriatric.com",
  hours: ["Monday - Friday: 9am - 5pm", "Weekends: By appointment only"],
  address: "Gulf Coast, Mississippi"
};
