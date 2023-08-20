$(".accordion h2").click(e => {
    $(".accordion p").slideUp()
    $("#" + e.target.nextElementSibling.id).slideToggle()
})

$("#open").click(() => {
    $("aside").animate({width: "200px"})
    $("#open").animate({paddingLeft: "220px"})
    $("main div").animate({marginLeft: "200px"})
})

$("#close").click(() => {
    $("aside").animate({width: "0"})
    $("#open").animate({paddingLeft: "30px"})
    $("main div").animate({marginLeft: "0"})
})

let time = new Date("sun 27 august 2023").getTime();
function setTime() {
    let now = new Date().getTime()
    let mils = time - now
    let days = Math.floor(mils / (24 *3600*1000))
    let hours = Math.floor((mils - days * 24 *3600 * 1000) / (3600 * 1000))
    let mins = Math.floor((mils - days * 24 * 3600 * 1000 - hours * 3600 * 1000) / (60*1000))
    let secs =Math.floor((mils - days * 24 * 3600 * 1000 - hours * 3600 * 1000 - mins * 60 * 1000) / (1000))
    $(".days").html(days + ' D')
    $(".hours").html(hours + ' H')
    $(".minutes").html(mins + ' M')
    $(".seconds").html(secs+ ' S')
}

setTime()

setInterval(setTime, 1000)