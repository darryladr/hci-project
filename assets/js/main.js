/* Show menu function */
const showMenu = (toggleId, navId) => {
	const toggle = $(toggleId), nav = $(navId);

	if (toggle && nav) {
		toggle.on("click", function () {
			nav.toggleClass("show");
		});
	}
};
showMenu("#nav-toggle", "#nav-menu");

/* Hide navbar in mobile */
const navLink = $(".nav__link");

function linkAction() {
	const navMenu = $("nav-menu");
	navMenu.removeClass("show");
}
navLink.each(function () {
    navLink.bind("click", linkAction)
});

/* Highlight navbar items while scrolling */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			$(".nav__menu a[href*=" + sectionId + "]").addClass("active");
		} else {
			$(".nav__menu a[href*=" + sectionId + "]").removeClass("active");
		}
	});
}

// $(window).scroll(function () {
// 	var position = window.pageYOffset;
// 	$("section").each(function () {
// 		var target = $(this).offset().top;
// 		var sectionId = $(this).attr("id");
// 		var navLinks = $(".nav__menu a");
// 		if (position >= target) {
// 			navLinks.removeClass("active");
// 			$(".nav__menu a[href*=" + sectionId + "]").addClass("active");
// 		}
// 	});
// });

/* Reveal animation*/
const sr = ScrollReveal({
	origin: "top",
	distance: "80px",
	duration: 2000,
	reset: true,
});

/* Home animation */
sr.reveal(".home__title", {});
sr.reveal(".home__scroll", { delay: 200 });
sr.reveal(".home__img", { origin: "right", delay: 400 });

/* About animation */
sr.reveal(".about__img", { delay: 400 });
sr.reveal(".about__subtitle", { delay: 300 });
sr.reveal(".about__profession", { delay: 400 });
sr.reveal(".about__interests", { delay: 400 });
sr.reveal(".about__education", { delay: 400 });
sr.reveal(".about__social-icon", { delay: 600, interval: 200 });

/* Skill animation */
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__name", { distance: "20px", delay: 50, interval: 100 });
sr.reveal(".skills__img", { delay: 400 });

/* Portfolio animation */
sr.reveal(".portfolio__img", { interval: 200 });

/* Contact animation */
sr.reveal(".contact__subtitle", {});
sr.reveal(".contact__text", { interval: 200 });
sr.reveal(".contact__input", { delay: 400 });
sr.reveal(".contact__button", { delay: 600 });
