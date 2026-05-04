import { api } from '@/app/baseUrl';
export interface InsightItem {
    type: 'warning' | 'advice' | 'insight';
    message: string;
  }
  type InsightsResponse = {
    insights: InsightItem[];
  };
  
  export async function getInsights(): Promise<InsightItem[]> {
    const res = await api.get('/analytics/insights');
  
    console.log('RAW:', res.data);
  
  return Array.isArray(res.data) ? res.data : res.data?.insights ?? [];
  }