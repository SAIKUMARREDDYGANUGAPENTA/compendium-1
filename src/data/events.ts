export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  fullDescription?: string;
  image: string;
  category: string;
  capacity?: string;
  requirements?: string[];
  speakers?: Array<{
    name: string;
    role: string;
  }>;
  schedule?: Array<{
    time: string;
    activity: string;
  }>;
}

export const events: Event[] = [
  // ... your existing events data with added fields
]; 