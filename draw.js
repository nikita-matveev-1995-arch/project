const achievements = document.querySelector(".achievements__block")

function renderAchievements(arr) {
    achievements.innerHTML = '';
    for (let achievement of arr) {
        const div = document.createElement("div")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const span = document.createElement("span")

        div.classList.add("achievements__item")
        img.classList.add("achievements__image")
        p.classList.add("achievements__name")
        span.classList.add("achievements__count")

        img.src = achievement.img
        p.innerHTML = achievement.name
        span.innerHTML = achievement.count

        div.append(img, p, span)
        achievements.append(div)
    }
}


const foodTypesBlock = document.querySelector(".benefits__items")

function renderFoodTypes(arr) {
    for (let foodType of arr) {
        const div = document.createElement("div")
        const p = document.createElement("p")
        const img = document.createElement("img")

        div.classList.add("foodTypes")
        img.src = foodType.img
        p.innerHTML = foodType.foodType

        div.append(img, p)
        foodTypesBlock.append(div)
    }
}


const recentPostsBlock = document.querySelector(".recentPosts")

const renderRecentPosts = (arr) => {
    for (let post of arr) {
        const div = document.createElement("div")
        const img = document.createElement("img")
        const textDiv = document.createElement("div")
        const p = document.createElement("p")
        const span = document.createElement("span")


        div.classList.add("recentPost")
        img.classList.add("recentPost__image")
        textDiv.classList.add("recentPost__text")
        p.classList.add("recentPost__title")
        span.classList.add("recentPost__date")

        img.src = post.image;
        p.innerText = post.title;
        span.innerText = post.date

        textDiv.append(p, span)
        div.append(img, textDiv)
        recentPostsBlock.append(div)
    }
}

const menuItemsBlock = document.querySelector(".menu__items")

function renderMenuItems(arr) {
    for (let menuItem of arr) {
        const div = document.createElement("div")
        const img = document.createElement("img")
        const textDiv = document.createElement("div")
        const p = document.createElement("p")
        const span = document.createElement("span")
        const price = document.createElement("span")

        div.classList.add("menu__item")
        textDiv.classList.add("menu__item-text")
        span.classList.add("menu__item-desc")
        price.classList.add("orange")

        img.src = menuItem.image
        p.innerText = menuItem.title
        span.innerText = menuItem.description
        price.innerText = menuItem.price

        textDiv.append(p, span, price)
        div.append(img, textDiv)
        menuItemsBlock.append(div)
    }
}

const chefsBlock = document.querySelector(".chefs__overview")

function renderChefs (arr) {
    for (let chef of arr) {
        const div = document.createElement("div")
        const textDiv = document.createElement("div")
        const p = document.createElement("p")
        const span = document.createElement("span")

        div.classList.add("chef")
        textDiv.classList.add("chef__name")
        p.classList.add("chef__firstName")


        div.style.backgroundImage = `url(${chef.image})` 
        p.innerText = chef.name
        span.innerText = chef.role

        textDiv.append(p, span)
        div.append(textDiv)
        chefsBlock.append(div)
    }
}

