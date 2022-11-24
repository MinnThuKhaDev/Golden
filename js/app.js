function calculate () {
    let text_area_container_inner_text = document.querySelector("#text-area-container").querySelector("textarea").value;
    let text_area_container =  document.querySelector("#text-area-container");

    let font_size = Number(document.querySelector("#font-size").value);
    let font_size_unit = document.querySelector("#font-size-unit").value ;
    let number_of_time = Number(document.querySelector("#number-of-time").value);
    let ratio =Number(document.querySelector("#ratio").value) ;

    // console.log (text_area_container_inner_text);
    // console.log (font_size);
    // console.log (font_size_unit);
    // console.log (number_of_time);
    // console.log (ratio);

    for ( i = 0; i < number_of_time; i++ ) {
        font_size *= ratio;
        font_size = font_size.toFixed(3);

        //creating a result div (looping will create next div)
        let result_div = document.querySelector("#result_div");
        result_div.setAttribute("class",`opacity-100`)

        //creating a result div (looping will create next div)
        let result_div_branch = document.createElement("div");
        result_div_branch.setAttribute("class",`input-group col-12 bg-white mb-4`);
        result_div_branch.innerHTML = text_area_container.innerHTML;

        //creating a result div > span div
        result_div_branch.querySelector("span").innerText = `${font_size}${font_size_unit}`;

        //creating a result div > textarea div
        result_div_branch.querySelector("textarea").innerText = text_area_container_inner_text;
        result_div_branch.querySelector("textarea").style.fontSize = `${font_size}${font_size_unit}`;

        result_div.append(result_div_branch);
    }
}