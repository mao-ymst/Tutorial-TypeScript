export const text = () => {
    
    //基本のdataの形
    const name:string = "nyon";
    const age:number = 5;
    const isStudent:boolean = false;
    const hobbies:string[] = ["Reading", "Coding", "Gaming"];
    const address:object = {
        street: "123 Main St",
        city:"Los Angeles",
        state: "CA"
    };
    const today:Date = new Date();
    const none:null = null;
    const notDefined:undefined = undefined;
    const random:any = "Hello World";

    const gender:"male" | "female" = "male";
    const value:string | number | null = "Hello World";

    

} 