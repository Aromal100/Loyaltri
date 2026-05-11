import { test } from '@playwright/test'
import Apidata from '../../config/Apidata.json'

test('Loyaltri login api', async ({ request,browser }) => {

    const apiReq = await request.post(
        "https://alpha-api.loyaltri.com/AdminLogin",
        {
            data: Apidata.loginData
        }
    );

    const apiRes = await apiReq.json();
    console.log(apiRes);
    



})