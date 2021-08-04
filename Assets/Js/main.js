"use strict"
const nextBtn = document.querySelectorAll(".carousel-scrollbar-control.next") 
const previewBtn = document.querySelectorAll(".carousel-scrollbar-control.preview")
const carouselCrollBar = document.querySelectorAll(".carousel-scrollbar")
const carouselCrollBarItem = document.querySelectorAll(".carousel-scrollbar-item")

console.log(carouselCrollBar)

carouselCrollBar.forEach((item)=>{
    item.style.scrollBehavior = "smooth"
})

const autoScroll = setInterval(()=>{
    carouselCrollBar.forEach((list)=>{
        carouselCrollBarItem.forEach((item)=>{
            if(item.scrollLeft < 200)
                list.scrollLeft += item.clientWidth + 16
            else
                list.scrollLeft = 0
        })
    })
}, 3000)

nextBtn.forEach((next)=>{
    next.addEventListener("click", (even)=>{
        carouselCrollBar.forEach((list)=>{
            carouselCrollBarItem.forEach((item)=>{
                list.scrollLeft += item.clientWidth + 16
                // clearInterval(autoScroll)
            })
        })
    })
})

previewBtn.forEach((next)=>{
    next.addEventListener("click", (even)=>{
        carouselCrollBar.forEach((list)=>{
            carouselCrollBarItem.forEach((item)=>{
                list.scrollLeft -= item.clientWidth + 16
                // clearInterval(autoScroll)
            })
        })
    })
})
