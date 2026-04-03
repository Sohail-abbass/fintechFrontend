import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0f172a;
`;

export const Card = styled.div`
  width: 400px;
  padding: 32px;
  border-radius: 16px;
  background: #1e293b;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: white;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #334155;
  background: transparent;
  color: white;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  color: white;
  cursor: pointer;
`;

export const ToggleText = styled.p`
  text-align: center;
  margin-top: 16px;
  color: #94a3b8;
`;

export const ToggleBtn = styled.span`
  color: #3b82f6;
  cursor: pointer;
`;

export const ErrorText = styled.p`
  color: #ef4444;
  font-size: 14px;
`;



// 'class BanckAccount {
//   constructor(
//     public owner : string,
//     private balance: number,
//    public accountType : 'savings' | 'current'
//   ){}
//   public deposit(amount: number) {
//     this.balance += amount;
  
//   }
// public withdraw(amount:number){
//   if(amount>this.balance){
// console.log("insufficient funds")
// return this.balance; }
//   return this.balance -= amount;

// }
// public getBalance(): number{
//   return this.balance;
// }}


// const sohailAccount = new BanckAccount("sohail", 1000, "savings");
// sohailAccount.deposit(3000);
// sohailAccount.withdraw(1000);
// sohailAccount.withdraw(1000); // "insufficient funds"

// console.log(sohailAccount.getBalance());
// '