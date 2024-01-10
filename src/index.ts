import express,{Request,Response} from 'express';

const app = express();
const port =  process.env.PORT || 3000;

app.get('/',(req:Request,res:Response) => {
    res.send("hellooooo");
})

app.listen(port,()=>{
    console.log(`listening in port:${port}`);
});
