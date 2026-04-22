import { api } from "@/app/baseUrl";

export async function getRisk() {
    interface RiskResponse {
        level: string;
        score: number;
        reason: string;
    }
    try{
        const res = await api.get<RiskResponse>('/analytics/risk');
        return res.data;
    }catch(error){
        console.error('Error fetching risk:', error);
        throw error;
    }
}