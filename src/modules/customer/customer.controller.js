import * as Yup from 'yup';

import {PROVIDER_ENUM} from "./customer.model";
import {AuthProvider} from "../../service/authProvider/index";


export const create = async (req , res) =>{
    const {token , provider} = req.body;
    const bodySchema = Yup.object().shape({
        token : Yup.string().required(),
        provider: Yup.string()
            .oneOf(PROVIDER_ENUM)
            .required()
    });

    try{
        await bodySchema.validate({token , provider});

        if(provider=== 'FACEBOOK'){
            const data = await AuthProvider.Facebook.authAsync(token);
            res.status(201).json(data);
        }

        res.status(201).json({message:'success'})
    }catch (error) {
        res.status(400).json({message : error.message|| 'no success'});
    }
};