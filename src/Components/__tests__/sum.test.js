
 import { sum } from "../sum"
 test("sum funcin should calclute the sum of two numbers",()=>{
   const res=sum(3,5);
    expect(res).toBe(8);
 })