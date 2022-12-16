export function findOutlier(integers: number[]): number {
  // your code here
  let lier:number=0;
  let even:number[] = [];
  let odd:number[] = [];
  integers.map((nums:number,index:number) => {
      if(nums % 2 === 0){
       even.push(nums);
      }else{
         odd.push(nums);
      }
    if(even.length === 1){
      lier = even[0];
    }
     if(odd.length === 1){
      lier = odd[0];
    }
  })
  
  return lier;
}
