document.addEventListener("DOMContentLoaded", () => {
    let select = document.querySelector("#selector")
    let div = document.createElement("div")
    let h3 = document.createElement("h3")
    let p = document.createElement("p")
    let p2 = document.createElement("p")
    let form = document.createElement("form")
    let input = document.createElement("input")
    let button = document.createElement("button")
    let ul = document.createElement("ul")
    let img = document.createElement("img")
    
    const gamePage = () => {
        img.src = "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png"
        document.body.appendChild(img)
        let h1 = document.createElement("h1")
        h1.innerText = "Ghibli Review App"
        document.body.appendChild(h1)
        document.body.appendChild(select)
        document.body.appendChild(div)
        
    }
    gamePage()
    const getData = async () => {
        let res = await axios.get("https://ghibliapi.herokuapp.com/films/")
        // let title = await axios.get(`https://ghibliapi.herokuapp.com/films/${filmId}/`)
        // console.log(title)
        let filmTitle = 0
        let films = {}
        for(let i = 0; i < res.data.length; i ++){
            let option = document.createElement("option")
            films[res.data[i].title] = i
            filmTitle = res.data[i].title

            option.innerText = filmTitle
            // console.log(option.value)
            // debugger
            
            select.appendChild(option)
        }
        select.addEventListener("change", () => {
            div.innerText = ""
            
            h3.innerText = select.value
            document.querySelector("div").appendChild(h3)
            // debugger
            p.innerText = res.data[Number(films[select.value])].release_date
            document.querySelector("div").appendChild(p)
            console.log(p.innerText)
            // debugger

            p2.innerText = res.data[films[select.value]].description
            document.querySelector("div").appendChild(p2)

            document.querySelector("div").appendChild(form)
            button.innerText = "Submit Review"
            form.appendChild(input)

            form.appendChild(button)
            document.querySelector("form").addEventListener("submit", () => {
                ul.innerText = input.value
                document.querySelector("div").appendChild(ul)


            })
        })





        
    }
    getData()
})