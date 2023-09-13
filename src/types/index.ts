export type FeatureFlag = {
  id: number;
  name: string;
  enabled: boolean;
  type: string;
  content: string;
  value: boolean;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
};

export type Config = {
  url: string;
  token: string;
  projectId?: string;
};
