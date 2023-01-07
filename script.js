async function fetchData() {
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  // console.log(data);
  return data;
}

async function callFetchData() {
  let tdata = " ";
  const responseData = await fetchData();
  console.log(responseData);
  

  responseData.map((key) => {
    tdata += `<tr>
        <td><img width="20px" src="${key.image}"/> &nbsp&nbsp&nbsp&nbsp${key.name}</td>
        <td>${key.symbol.toUpperCase()}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</td>
        <td>$${key.current_price}</td>
        <td>$ ${key.total_volume}</td>
        <td class="${key.price_change_percentage_24h > 0 ? "positiveValues" : "negativeValues"}">${key.price_change_percentage_24h}%</td>
        <td>Mkt Cap : $${key.market_cap}</td>
    </tr>`;
  });
  document.getElementById("data").innerHTML = tdata;
}
callFetchData();
