 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
		window.onscroll = function() {
            const backToTop = document.querySelector('.back-to-top');
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        };
		function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
		function openCalendar() {
            document.getElementById('calendarPopup').style.display = 'block';
        }
        function closeCalendar() {
            document.getElementById('calendarPopup').style.display = 'none';
        }
        // Dark/Light Mode Toggle
        function toggleTheme() {
            document.body.classList.toggle('light-mode');
        }
		function openArtCirclePage() {
        window.location.href = "x12.html";
    }
	function openCsiCirclePage() {
        window.location.href = "x3.html"; 
    }
	function openPACPage() {
        window.location.href = "x3.html"; 
    }
	 function sendMessage() {
            alert('Thank you for your message! We will get back to you soon.');
        }
document.getElementById(".register").addEventListener("onclick", function(event) {
   
    
    
    
    alert("Please select the club you want to register for.");
  });