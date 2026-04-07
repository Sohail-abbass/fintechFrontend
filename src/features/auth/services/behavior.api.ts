import { api } from '@/app/baseUrl';
export async function getBehavior() {
    interface BehaviorResponse {
        totalSpend: number;
        topCategory: string;
        score: number;
    }
    try{
        const res = await api.get<BehaviorResponse>('/behavior');
        return res.data;
    }catch(error){
        console.error('Error fetching behavior:', error);
        throw error;
    }
}