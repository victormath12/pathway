export declare namespace IOnboarding {
  interface LifeMoment {
    id: string
    name: string
    description: string
    thumb?: string
    category?: {
      id: string
      name: string
      slug: string
    }
  }

  interface Path {
    id: string;
    name: string;
    category: {
      id: string;
      slug: string;
      name: string;
    };
    status: "active" | "inactive";
    enroll_availability_start_date: Date; // formato ISO 8601 (ex: 2024-11-01T00:00:00.000Z)
    managers: {
      users?: {
        id?: string;
        name?: string;
        thumbnail_url?: string;
      }[]
    }[];
    total_members: number;
    subscription: {
      status: "subscribed" | "not_subscribed";
    };
  }
}
