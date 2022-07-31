document.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector(".nav-burger"),
		menu = document.querySelector("nav ul"),
		body = document.querySelector("body"),
		dark = document.querySelector(".dark")

	burger.addEventListener("click", () => {
		burger.classList.toggle("active-burger")
		menu.classList.toggle("active-nav")
		dark.classList.toggle("dark-active")

		const pageWidth = document.documentElement.scrollWidth,
			pageHeight = document.documentElement.scrollHeight

		dark.style.width = pageWidth + "px"
		dark.style.height = pageHeight + "px"

		body.classList.toggle("overflow-active")
	})

	dark.addEventListener("click", () => {
		burger.classList.remove("active-burger")
		menu.classList.remove("active-nav")
		dark.classList.remove("dark-active")

		body.classList.remove("overflow-active")
	})
})
