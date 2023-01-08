const express = require("express");
const app = express()
let links = [
    "https://collectbladders.com/wsz6j2r0?key=60b8628c58795a1aef535baac6e0fb7f"
]
const puppeteer = require("puppeteer-extra");
const stealth = require("puppeteer-extra-plugin-stealth");
puppeteer.use(stealth());
const {executablePath} = require("puppeteer");
const userAgents = require("user-agents");
function start(){
    (
        async()=>{
            const b = await puppeteer.launch({headless:true,executablePath:executablePath(),args:[
                "--no-sandbox",
                "--disable-gpu"
    
            ]})
            const p = await b.newPage()
            let ps = await b.pages()
        await p.setUserAgent(userAgents.random().toString());
    
            await ps[0].close()
            await p.goto(links[0]);
            await p.waitForTimeout(3500000)
            await b.close();
    
        }
    )()
}
app.get("/",(req,res)=>{
    res.send("wow")
})
app.listen(process.env.PORT)