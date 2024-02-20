$(document).ready(function(){

    $.getJSON('data/team.json', function(data){
        var team ='';
        let member;

        $.each(data, function(index,yearData){
            team +='<div class="year">'+
            '<div class="year-button">';
            team +=yearData.year;
            team +='&nbsp;&nbsp;&nbsp;&nbsp; <i class=" fa-solid fa-caret-down"></i></div><br><div class="team"><div class="team-members">';
            $.each(yearData.teamData, function(index, values)
            {
                if(values.name!="")
                {
                    member ='<div class="person">';
                    if(values.img!="")
                        member+= '<img class ="photo" src="images/core/'+values.img+'" alt="'+values.name+'">';
                    else
                        member+= '<img class ="photo" src="images/core/'+values.img+' alt="'+values.name+'">';

                    member +='<div class="personal-info cursor-scale small"><h3 class="name"><b>'+values.name+'</b></h3><h3 class="designation">'+values.designation+'</h3><div class="social-links">';
                    
                    if(values.social_links.github)
                        member +='<a href="'+values.social_links.github+'" target="_blank" ><i class="fa-brands fa-github  link github"></i></a>';
                    if(values.social_links.linkedin)
                        member +='<a href="'+values.social_links.linkedin+'" target="_blank"><i class="fa-brands fa-linkedin link linkedin"></i></a>';
                    if(values.social_links.instagram)
                        member +='<a href="'+values.social_links.instagram+'" target="_blank"><i class="fa-brands fa-instagram link instagram"></i></a>';
                    member +='</div></div></div>'
                }
                team +=member;
            });
            team +=member ="</div></div></div>";
        });
        $('.team-data').html(team);
 
    });



    var selectYear = $('#event-year');

    $.getJSON('data/event.json', function(data){
        for(let i=data.length-1; i>=0;i--)
        {
            selectYear.append(
                $('<option></option>')
                .attr('value', data[i].year)
                .text(data[i].year)
                );
        }
        updateEvents(data[data.length-1].year);
    });

    selectYear.on('change', function(){
        updateEvents(selectYear.val());
    })


    function updateEvents(year)
    {
        let eventData;
        $.getJSON('data/event.json', function(data){
            for(let i=data.length-1; i>=0;i--)
            {
                if(year===data[i].year)
                {
                    $('.event-slider').empty();
                    data[i].events.forEach((element, index) => {
                        let event ="";
                        if(index == 0)
                            event+="<div class='event-models selected'>";
                        else if(index==1)
                            event+="<div class='event-models next-event'>";
                        else
                            event+="<div class='event-models '>";

                                event+="<div class='event-images'>";
                                event+="<img class='showImg' src='images/events/"+year+"/"+element["header-image"]+"'/>";
                                    element.images.forEach((img, imgIndex) => {  
                                        event+="<img class='hideImg' src='images/events/"+year+"/"+img+"'/>";
                                    });
                                event+="</div>";

                                event+="<div class='event-data'>";
                                    event+="<div class='event-details'>";
                                        event+="<h3 class='event-name'>"+ element.name+"</h3><br>";
                                        event+="<span class='event-date fa-solid fa-calendar-days'>&nbsp;&nbsp;  "+element.date+" </span>";
                                        event+="<div class='event-description'>"+element.description+"</div>";
                                    event+="</div>";
                                event+="</div>";
                            event+="</div> ";
                            $('.event-slider').append(event);
                    });
                }
            }
        });
        imageChange();
    }


});

/* <div class="event-models selected">
<div class="event-images">
    <img class="showImg" src="images/events/Event1.jpg"/>
    <img class="hideImg" src="images/events/event2.jpeg"/>
    <img class="hideImg" src="images/events/Event1.jpg"/>
    <img class="hideImg" src="images/events/event2.jpeg"/>
</div>

<div class="event-data">
    <div class="event-details">
        <h3 class="event-name">
            Intro to DJS-Compute & App Dev Workshop
        </h3>
        <br>
        <span class="event-date fa-solid fa-calendar-days">&nbsp; 1 January</span>
        <div class="event-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas sint accusantium nisi sapiente labore quaerat. 
                Voluptatem doloribus, excepturi odit eius a quasi vitae, accusantium aliquid iusto nisi, odio atque.
        </div>
    </div>
</div>
</div> */




// '<div class="person">'+
//     '<img class ="photo" src="images/download (2).png">'+
//     '<div class="personal-info">'+
//         '<h3 class="name"><b>Prashnt Yelurkar.</b></h3>'+
//         '<h3 class="designation">(Web Development)</h3>'+
//         '<div class="social-links">'+
//             '<i class="fa-brands fa-github  link"></i>'+
//             '<i class="fa-brands fa-linkedin link"></i>'+
//             '<i class="fa-brands fa-instagram link "></i>'+
//         '</div>'+
//     '</div>'+
// '</div>'


