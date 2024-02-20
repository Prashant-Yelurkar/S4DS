$( document ).ready(function() {
            
    // Navigation slider
    $(".nav").on("click ",function (){
        $(".side-nav").toggleClass("toggle");

    });



    // Section changer
      const links = $(".nav-link");
      links.each(function(){
        $(this).click(function(){
            var id = $(this).text();
            $('.pages').css("display","none");
            $("#"+id.trim()).css("display","flex");
            $(".side-nav").addClass("toggle");
            $(".side-nav").removeClass("toggle");
        })
      });

      
      //team as per year Button
      $('.team').on('click', '.year-button', function() {
        let icon = $(this).children("i");
        if (icon.hasClass("fa-caret-down")) {
            icon.removeClass("fa-caret-down").addClass("fa-caret-up");
        } else {
            icon.removeClass("fa-caret-up").addClass("fa-caret-down");
        }
        $(this).parent().toggleClass('expanded');


    });



    //Events Scrollbar
    var currentIndex = 1;
    var selectedEvent ; 
    var eventImages; 
    var changeImages  ;
    $("#next-event").click(function(){
        if(currentIndex < $(".event-models").length)
        {
            $(".event-models").eq(currentIndex).addClass('selected');
            selectEvent();
            $(".event-models").eq(currentIndex).removeClass('next-event');
            currentIndex++;  
            $(".event-models").eq(currentIndex).addClass('next-event');
            // changeImage();

        }
    });
    $("#previous-event").click(function(){
        
        if(currentIndex>1)
        {
            $(".event-models").eq(currentIndex).removeClass('next-event');
            currentIndex--;
            $(".event-models").eq(currentIndex).addClass('next-event');
            $(".event-models").eq(currentIndex).removeClass('selected');
            selectEvent();
        }
    });


    $('.event-slider').on('click', '.next-event', function(){
        $(this).addClass('selected');
        $(".event-models").eq(currentIndex).removeClass('next-event');
        if(currentIndex < $(".event-models").length) {
            currentIndex++;
            $(".event-models").eq(currentIndex).addClass('next-event');
        }
    });
    
    //chnage event images
    function selectEvent() {
        clearInterval(changeImages); 
        changeImages = setInterval(changeImage, 5000);
    }

    function changeImage()
    {
        selectedEvent = $('.event-slider .selected').eq(-1); 
        eventImages = selectedEvent.find('.event-images img');
        for(let i =0; i<eventImages.length;i++)
        {
            if ($(eventImages[i]).hasClass('showImg')) {
                $(eventImages[i]).removeClass('showImg');
                $(eventImages[i]).addClass('hideImg');
                if(i < eventImages.length -1)
                {
                    $(eventImages[i + 1]).removeClass('hideImg');
                    $(eventImages[i + 1]).addClass('showImg');
                }
                else{
                    $(eventImages[0]).removeClass('hideImg');
                    $(eventImages[0]).addClass('showImg');
                }
                break;
            }
        }
    }
    window.imageChange = selectEvent;

    //Chnage event by Key
    $(document).keydown(function(e) {
        switch (e.keyCode) {
            case 37:
                $('#previous-event').click();
                break;
            case 39:
                $('#next-event').click();
                break;
        }
    });
    
    // Chage Home page Description
    const quotes = [
        "&#10077; &nbsp;&nbsp;",
        "&nbsp;&nbsp;&#10078;",
    ];

    const lines = [
        "Diving Deep into the Data Universe: Committee of Analytical Thinkers and Innovators.",
        "Data science isn't about the quantity of data rather the quality",
        "It's easy to lie with statistics. It's hard to tell the truth without statistics.",
        "Since most of the world's data is unstructured, an ability to analyze and act on it presents a big opportunity."
    ];

    let index = 0;

    function displayLine() {
        $('#line').removeClass('moving');
        const line = lines[index];
        let charIndex = 0;
        let typingInterval = setInterval(function() {
            $('#line').html(quotes[0] + line.substring(0, charIndex) + quotes[1]);
            charIndex++;
            if (charIndex > line.length) {
                clearInterval(typingInterval);
                setTimeout(function() {
                    $('#line').addClass('moving');
                }, 500); // Adjust the delay before restarting the animation
            }
        }, 50); // Adjust the typing speed (milliseconds per character)
        index++;
        if (index >= lines.length) {
            index = 0;
        }
    }

    // Initial call to start the animation
    displayLine();

    // Call displayLine every 5 seconds
    setInterval(displayLine, 10000);




    // Audio playing
    const Audio =  document.getElementById("Audio");
    var greetings = 0;
    $(document).on("click", function(){
        if(greetings == 0)
        {
            // Audio.play();
            greetings = 1;
            $(".music-icon").addClass("fa-pause");
            $('.music').css("background-image", "url(images/music.gif"); 
        }
    })
    $('.music').click(function(){
        if(Audio.paused)
        {
            Audio.play();
            $(".music-icon").removeClass("fa-play");
            $(".music-icon").addClass("fa-pause");
            $('.music').prop("title" ,"pause");
            $('.music').css("background-image", "url(images/music.gif"); 
        }
        else
        {
            Audio.pause();
            $(".music-icon").removeClass("fa-pause");
            $(".music-icon").addClass("fa-play");
            $('.music').prop("title" ,"play");
            $('.music').css("background-image", "url(images/music.png"); 
        }
    });


var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    $('.cursor').css('left',mouseX);
    $('.cursor').css('top',mouseY);
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
        cursor.classList.remove('grow-medium');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.remove('grow-medium');
            cursor.classList.add('grow-small');
        }
        else if(link.classList.contains('medium')){
          cursor.classList.remove('grow');
          cursor.classList.remove('grow-small');
          cursor.classList.add('grow-medium');
      }
    });
});


});