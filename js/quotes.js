const quotes = [
    {
        quote : "生懸命だと知恵が出る。中途半端だと愚痴が出る。いい加減だと言い訳が出る。",
        author :"武田信玄",
    },
    {
        quote : "すべて物事には終わりがある。したがって、忍耐は成功を勝ち得る唯一の手段である。",
        author: "まくしむごーりきー",
    },
    {
        quote : "もし今日が人生最後の日だとしたら、今やろうとしていることは本当に自分のやりたいことだろうか",
        author: "すていぶじょぶす",
    },
    {
        quote : "常に今日は明日の準備ですからね。今日やったことは必ず明日に帰ってくるんです。",
        author: "水喜",
    },
    {
        quote : "無理という壁を越えなければ強くならない。",
        author: "井語",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

console.log(todayQuote);

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;