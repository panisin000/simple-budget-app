//เปลี่ยนเลขมือถือที่ติดกันเป็น xxxxxxxxxxx => xxx-xxx-xxxx

//string -> string
export function mobileFormat(mobileNo: string): string {


    return mobileNo.slice(0, 3) + "-" + mobileNo.slice(3, 6) + "-" + mobileNo.slice(6)
}

// console.log(mobileFormat("0812345678"));