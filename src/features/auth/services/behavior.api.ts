import { api } from '@/app/baseUrl';
export async function getBehavior() {
    interface BehaviorResponse {
        totalSpend: number;
        topCategory: string;
        score: number;
    }
    try{
        const res = await api.get<BehaviorResponse>('/analytics/behavior');
        console.log("we have response",res);
        console.log("we have response",res.data);

        return res.data;
    }catch(error){
        console.error('Error fetching behavior:', error);
        throw error;
    }
}