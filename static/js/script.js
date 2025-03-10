// Round One

function roundOne() {
    document.getElementById('round').innerHTML = "<p>Round One</p>";
    document.getElementById('main-buttons').style.display = "none";

    document.getElementById('play').onclick = function() {
        document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        $('#audio').html('<audio autoplay><source src="media/canada.mp3"></audio>');
    }
        
    document.getElementById('pause').onclick = function() {
        $('#audio').html('');
    }
    
    let country = document.getElementsByClassName("country");
    
    for (let i=0; i < country.length; i++) {
        country[i].addEventListener('click', function(e) {
            if(country[i].id == 'Canada') {
                document.getElementById('Canada').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundTwo();
                }
                $('#audio').html('');
            } else {
                document.getElementById('Canada').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer! The correct answer was Canada!</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundTwo();
                }
                $('#audio').html('');
            }
        })
    }
}

// Round Two

function roundTwo() {
    document.getElementById('round').innerHTML = "<p>Round Two</p>";
    document.getElementById('Canada').style.fill = "green";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-circle-play"></i>';

    document.getElementById('play').onclick = function() {
        document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        $('#audio').html('<audio autoplay><source src="media/china.mp3"></audio>');
    }
        
    document.getElementById('pause').onclick = function() {
        $('#audio').html('');
    }
    
    let country = document.getElementsByClassName("country");
    
    for (let i=0; i < country.length; i++) {
        country[i].addEventListener('click', function(e) {
            if(country[i].id == 'China') {
                document.getElementById('China').style.fill = "black";
                document.getElementById('Canada').style.fill = "green";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundThree();
                }
                $('#audio').html('');
            } else {
                document.getElementById('China').style.fill = "black";
                document.getElementById('Canada').style.fill = "green";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundThree();
                }
                $('#audio').html('');
            }
        })
    }
}

// Round Three

function roundThree() {
    document.getElementById('round').innerHTML = "<p>Round Three</p>";
    document.getElementById('China').style.fill = "blue";
    document.getElementById('Canada').style.fill = "green";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-circle-play"></i>';

    document.getElementById('play').onclick = function() {
        document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        $('#audio').html('<audio autoplay><source src="media/france.mp3"></audio>');
    }
        
    document.getElementById('pause').onclick = function() {
        $('#audio').html('');
    }
    
    let country = document.getElementsByClassName("country");
    
    for (let i=0; i < country.length; i++) {
        country[i].addEventListener('click', function(e) {
            if(country[i].id == 'France') {
                document.getElementById('France').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundFour();
                }
                $('#audio').html('');
            } else {
                document.getElementById('France').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundFour();
                }
                $('#audio').html('');
            }
        })
    }
}

// Round Four

function roundFour() {
    document.getElementById('round').innerHTML = "<p>Round Four</p>";
    document.getElementById('China').style.fill = "blue";
    document.getElementById('Canada').style.fill = "green";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-circle-play"></i>';

    document.getElementById('play').onclick = function() {
        document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        $('#audio').html('<audio autoplay><source src="media/germany.mp3"></audio>');
    }
        
    document.getElementById('pause').onclick = function() {
        $('#audio').html('');
    }
    
    let country = document.getElementsByClassName("country");
    
    for (let i=0; i < country.length; i++) {
        country[i].addEventListener('click', function(e) {
            if(country[i].id == 'Germany') {
                document.getElementById('Germany').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundFive();
                }
                $('#audio').html('');
            } else {
                document.getElementById('Germany').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundFive();
                }
                $('#audio').html('');
            }
        })
    }
}

// Round Five

function roundFive() {
    document.getElementById('round').innerHTML = "<p>Round Five</p>";
    document.getElementById('China').style.fill = "blue";
    document.getElementById('Canada').style.fill = "green";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-circle-play"></i>';

    document.getElementById('play').onclick = function() {
        document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        $('#audio').html('<audio autoplay><source src="media/japan.mp3"></audio>');
    }
        
    document.getElementById('pause').onclick = function() {
        $('#audio').html('');
    }
    
    let country = document.getElementsByClassName("country");
    
    for (let i=0; i < country.length; i++) {
        country[i].addEventListener('click', function(e) {
            if(country[i].id == 'Japan') {
                document.getElementById('Japan').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundSix();
                }
                $('#audio').html('');
            } else {
                document.getElementById('Japan').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundSix();
                }
                $('#audio').html('');
            }
        })
    }
}

// Round Six

function roundSix() {
    document.getElementById('round').innerHTML = "<p>Round Six</p>";
    document.getElementById('China').style.fill = "blue";
    document.getElementById('Canada').style.fill = "green";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-circle-play"></i>';

    document.getElementById('play').onclick = function() {
        document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        $('#audio').html('<audio autoplay><source src="media/russia.mp3"></audio>');
    }
        
    document.getElementById('pause').onclick = function() {
        $('#audio').html('');
    }
    
    let country = document.getElementsByClassName("country");
    
    for (let i=0; i < country.length; i++) {
        country[i].addEventListener('click', function(e) {
            if(country[i].id == 'Russia') {
                document.getElementById('Russia').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundSeven();
                }
                $('#audio').html('');
            } else {
                document.getElementById('Russia').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                    roundSeven();
                }
                $('#audio').html('');
            }
        })
    }
}

// Round Seven

function roundSeven() {
    document.getElementById('round').innerHTML = "<p>Round Seven</p>";
    document.getElementById('China').style.fill = "blue";
    document.getElementById('Canada').style.fill = "green";
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('play').innerHTML = '<i class="fa-solid fa-circle-play"></i>';

    document.getElementById('play').onclick = function() {
        document.getElementById('play').innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        $('#audio').html('<audio autoplay><source src="media/spain.mp3"></audio>');
    }
        
    document.getElementById('pause').onclick = function() {
        $('#audio').html('');
    }
    
    let country = document.getElementsByClassName("country");
    
    for (let i=0; i < country.length; i++) {
        country[i].addEventListener('click', function(e) {
            if(country[i].id == 'Spain') {
                document.getElementById('Spain').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Correct Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                }
                $('#audio').html('');
            } else {
                document.getElementById('Spain').style.fill = "black";
                document.getElementById('pop-up-text').innerHTML = "<p>Wrong Answer</p>";
                document.getElementById('pop-up').style.display = "block";
                document.getElementById('next-round').onclick = function() {
                }
                $('#audio').html('');
            }
        })
    }
}


// Map Information
var tooltipSpan = document.getElementById('details-box');
var map = document.querySelectorAll('[data-name]');
document.addEventListener('mouseover', function (e) {
    
    try {
        if (e.target.tagName == 'path') {
            if(map == undefined) {
            }
            var content = e.target.dataset.name;
            document.getElementById("details-box").innerHTML = content;
            document.getElementById("details-box").style.opacity = "100%";
            map.style.opacity = "100%";
            
        }
        else {
            document.getElementById("details-box").style.opacity = "0%";
            map.style.opacity = "0%";
        }
    } catch (error) {  
    }
   
});

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.top = (y + 50) + 'px';
    tooltipSpan.style.left = (x) + 'px';
};
