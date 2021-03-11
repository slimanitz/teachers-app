import  * as express from 'express';
import { sequelize } from './database';



const app = express()



app.listen(8080,()=>{
    console.log('The app is running at localhost:8080')
    sequelize.authenticate().then(async ()=>{
        console.log('database connected')
        try{
            await sequelize.sync({force:true})
            console.log('sync success')

        }catch(error){
            console.log(error.message)
        }
    }).catch((err)=>console.log(err.message))
})