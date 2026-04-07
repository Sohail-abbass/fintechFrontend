import { api } from '@/app/baseUrl';
export async function getInsights() {
    interface InsightsResponse {
        insights: string;
    }
    try{
        const res = await api.get<InsightsResponse>('/insights');
        return res.data;
    }catch(error){
        console.error('Error fetching insights:', error);
        throw error;
    }
}