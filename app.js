function time(){
    var date=new Date
    var hours=date.getHours()
    var min=date.getMinutes()
    var month=date.getMonth()
    var day=date.getDate()
    var year=date.getFullYear()
    min=min.toString()
    if(min.length<1){
        min=min+'0'
        return min
    }

    document.getElementById('time').innerHTML+=`${hours}:${min}`
    document.getElementById('date').innerHTML+=`${fixMonths(month)} ${day}, ${year}`

}
function fixMonths(month){
    if(month===0){
        month='Jan'
        return month
    }
    if(month==1){
        month='Feb'
        return month
    }
    if(month==2){
        month='Mar'
        return month
    }
    if(month==3){
        month='Apr'
        return month
    }
    if(month==4){
        month='May'
        return month
    }
    if(month==5){
        month='Jun'
        return month
    }
    if(month==6){
        month='Jul'
        return month
    }
    if(month==7){
        month='Aug'
        return month
    }
    if(month==8){
        month='Sept'
        return month
    }
    if(month==9){
        month='Oct'
        return month
    }
    if(month==10){
        month='Nov'
        return month
    }
    if(month==11){
        month='Dec'
        return month
    }
}
time()


 $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  $("#quote").append(a[0].content + "   — " + a[0].title)
});
