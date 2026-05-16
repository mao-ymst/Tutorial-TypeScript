export const text = () => {
    
    // //1 基本のdataの形
    // const name:string = "nyon";
    // const age:number = 5;
    // const isStudent:boolean = false;
    // const hobbies:string[] = ["Reading", "Coding", "Gaming"];
    // const address:object = {
    //     street: "123 Main St",
    //     city:"Los Angeles",
    //     state: "CA"
    // };
    // const today:Date = new Date();
    // const none:null = null;
    // const notDefined:undefined = undefined;
    // const random:any = "Hello World";

    // const gender:"male" | "female" = "male";
    // const value:string | number | null = "Hello World";

    // //2 問題：引数に文字列の配列を受け取り　その中身を順番を逆にして返す関数を作成する
    // //例：　reverseArray(["a","b","c"]) => ["c,"b","a"]
    // //実際にデータ型を定義してみる：変数、引数、返り値


    // //引数の隣：　の隣にstring[]を置くことで　これを返り値に指定することができる
    // //3 オプション引数について　二つ目の所 ?をつけると　あってもなくても成立する
    // const reverseArray = (arr: string[], hasTom?):string[] => {

    //     // return arr.reverse();　既存の順番を逆にできる機能

    //     const reversedArray:string[] = []; //結果用の空っぽの新しい箱を用意する
    //     let index:number = arr.length - 1; //元の箱の一番後ろの文字からスタートできるように一番後ろを確認　-1することでインデックス番号と帳尻を合わせる
    //     while(index >= 0) {
    //         reversedArray.push(arr[index]); //indexが０より大きいなら新しい箱に入れる　まず指定した一番後ろの数を入れて
    //         index--; // indexの番号を１つずつ減らしていく　3->2->1みたいに
    //     }

    //     //3 
    //     if(hasTom) {
    //         reversedArray.push('Tome');
    //     }
    //     return reversedArray; //中身が新しくなったら配列を返す

    // }

    // //3 hasTom->true
    // console.log(reverseArray(["a","b","c"],true));

    //4 オブジェクトの型定義 
    const user = {
        userId: 1,
        name: "Won",
        age: 25,
        email: "won@gmail.com",
        isActive: true,
    }
    
    // オブジェクトに一気に型を指定する
    interface UserProps {
        UserId: number;
        name: string;
        age: number;
        email: string;
        isActive: boolean;
    }

    //アカウント情報を入れるとアカウントを作られる関数を作る
    const createAccount = (accountInfo:UserProps) => {
        //行いたい処理
    }
    createAccount();
} 

text();