
export interface PageHeaderProps  {
    // pageNames = string[];
    pageNames: string[];
    heading: string;
    description?: string;
}
export interface JobCardProps {
    _id?: number;
    jobTitle: string;
    jobDescription: string;
    companyName: string;
    location: string;
    jobType: string;
    applicationEmail: string;
    applicationLink: string;
    tags?: string[];
  }