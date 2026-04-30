import {test} from '@playwright/test'
import Apidata from '../../config/Apidata.json'


test('Loyaltri Login Api test',async({request})=>{

    const apiReq=await request.post("https://alpha-api.loyaltri.com/api/main",{
        headers: {
                "Content-Type": "application/json"
            },
        data:{ action: "login",
        data:Apidata.loginData, }
    });

    const apiRes=await apiReq.json();
    console.log(apiRes);

})