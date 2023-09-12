import { Runtime, Library, Inspector } from "./runtime.js";
import {define} from "./data.js"
const runtime = new Runtime();
const main = runtime.module(define, Inspector.into(document.getElementById("chart")));

const dataPromise = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=z8hphho743jtsliVDgcaJo21c6hF40AlnAMjYgMeiwtTFaKm4QiANZD1PjQI4zfA2wyoy2J5GE5oQOXH2V_DwN8hKQtCltCHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnO-7WvVP0kRpNt-jAwgzGwyCBbdxzBW63XsI6av-vom6KcDBCiD1FuC5U_-V4X6Xyp-25zXYRG2_zRdCMIvNXQ2jq-hGJ9H0FITlcIxRdDxnyBAf43AAwP8&lib=MkGKZVwWGXHB2Y5uU4Foayovp0JyI2OVU");
const data = await dataPromise.json();
    

    setTimeout(function () {
        document.querySelector(".overlay").style.display = "none";
    }, 1000); 
data.sort((a,b)=>{
    return b.completed - a.completed;
})
let innerHtml = ""
for (let i = 0; i < data.length; i++) {
    let completed = data[i].completed != 0 ? "Yes" : "No";
    let template = `<tr id="listItem" student=${data[i].name}>
                                    <th scope="row">${i + 1}</th>
                                    <td>${data[i].name}</td>
                                    <td>${completed}</td>
                                    <td>${Math.max(0, data[i].completed - 1)}</td>
                                </tr>`;
    innerHtml += template;
}
document.getElementById("tableBody").innerHTML = innerHtml;
console.log(data);
