function add() {
    var country = document.getElementById("country").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var xhttp1 = new XMLHttpRequest();
    var url = "https://api.covid19api.com/country/" + country + "?from=" + from + "T00:00:00Z&to=" + to + "T00:00:00Z";

    document.getElementById("result_area").innerHTML = url;
    xhttp1.open("GET", url, true);
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var list = JSON.parse(this.responseText);
            var count_case = 0;
            var count_death = 0;
            var count_active = 0;
            for (var i = 0; i < list.length; i++) {
                count_case = count_case + list[i].Confirmed;
                count_active = count_active + list[i].Active;
                count_death = count_death + list[i].Deaths;
            }
            create(count_case, count_active, count_death);

        }
    };
    xhttp1.send();

}



function create(count_case, count_active, count_death) {
    var parent = document.getElementById("result_area");
    var div_parent = document.createElement("div");

    var c_c = document.createElement("p");
    var c_text = document.createTextNode("Confirmed cases:");
    c_c.appendChild(c_text);

    var s_c_c = document.createElement("span");
    var s_c_c_text = document.createTextNode(count_case);

    s_c_c.appendChild(s_c_c_text);
    c_c.appendChild(s_c_c);

    div_parent.appendChild(c_c);

    var a_c = document.createElement("p");
    var a_text = document.createTextNode("Active cases:");
    a_c.appendChild(a_text);

    var s_a_c = document.createElement("span");
    var s_a_c_text = document.createTextNode(count_active);

    s_a_c.appendChild(s_a_c_text);
    a_c.appendChild(s_a_c);

    div_parent.appendChild(a_c);



    var d_c = document.createElement("p");
    var d_text = document.createTextNode("Death cases:");
    d_c.appendChild(d_text);

    var s_d_c = document.createElement("span");
    var s_d_c_text = document.createTextNode(count_death);

    s_d_c.appendChild(s_d_c_text);
    d_c.appendChild(s_d_c);

    div_parent.appendChild(d_c);


    div_parent.setAttribute("class", "div_blue");
    parent.appendChild(div_parent);
}