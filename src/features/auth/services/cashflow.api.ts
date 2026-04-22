import { api } from '@/app/baseUrl';
export async function getCashflow() {
    interface CashflowResponse {
        balance: number;
        runOutDate: string;
    }
    try{
        const res = await api.get<CashflowResponse>('/analytics/cashflow');
        return res.data;
    }catch(error){
        console.error('Error fetching cashflow:', error);
        throw error;
    }
    
}