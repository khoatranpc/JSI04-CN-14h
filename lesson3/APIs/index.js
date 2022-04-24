// APIs, hiểu lại cơ chế xử lý bất đồng bộ

let fetchData = async () => {
    let callData = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await callData.json();
    logData(await data);
}
let dataAfterfetch;
let logData = (data) => {
    dataAfterfetch = data;
    console.log(dataAfterfetch);
}
fetchData();