<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="utf-8">
    <title>D3 Demo: 5-div bar chart</title>
    <script type="text/javascript" src="http://d3js.org/d3.v4.min.js"></script>
    <style type="text/css">
        .chart rect {
            fill: steelblue;
        }
        
        .chart text {
            fill: white;
            font: 10px sans-serif;
            text-anchor: end;
        }
    </style>
</head>

<body>
    <!-- Hier beginnt das Beispiel aus der Vorlesung -->
    <p>Guten Tag!</p>

    <svg class="chart"></svg>

    <script type="text/javascript">
        async function getData(url = "") {
            const response = await fetch(url, {
                method: "GET",
                credentials: "same-origin",
                mode: "no-cors",
                headers: {
                    //          "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
            console.log(response);
            return response.json();
        }
        /*
                 const vac = getData("https://l1n.de/tl2/public/country/deu/vaccinations").then((data) => {
                     console.log(data)
                 });

                 const data = vac;
                 //console.log(vac.selectAll("people_vaccinated"));
                 console.log(vac); */



        getData('https://l1n.de/tl2/public/country/deu/vaccinations')
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.log('error error error ' + response.status);
                        return;
                    }
                    console.log(response);
                    return response.json();
                })
            .then(function(data) {
                console.log(data[0].people_vaccinated);
            })
            .catch(function(err) {
                console.log('Fetch error ', err);
            });


        //const data = [4, 8, 15, 16, 23, 42, 42];


        /*
                const width = 420;
                const barHeight = 20;

                const x = d3.scaleLinear()
                    .domain([0, d3.max(data)])
                    .range([0, width]);

                const chart = d3.select(".chart")
                    .attr("width", width)
                    .attr("height", barHeight * data.length);

                const bar = chart.selectAll("g")
                    .data(data)
                    .enter().append("g")
                    .attr("transform", (d, i) => "translate(0," + i * barHeight + ")");

                bar.append("rect")
                    .attr("width", d => x(d))
                    .attr("height", barHeight - 1);

                bar.append("text")
                    .attr("x", d => x(d) - 4)
                    .attr("y", barHeight / 2)
                    .text(d => d);*/
    </script>
</body>

</html>
