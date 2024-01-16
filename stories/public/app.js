console.log('this is client code')

fetch('http://localhost:5000/stories').then(async res => {
    const data = await res.json()
    console.log(data)


    data.forEach(element => {
        const p = document.createElement('p')
        p.textContent = element
        p.addEventListener('click', () => {
            fetch('http://localhost:5000/read').then(async readRes => {
                const page = await readRes.json()

                document.body.innerHTML = ''

                const text = document.createElement('p')
                text.innerText = page.text
                document.body.appendChild(text)

                page.choices.forEach(choice => {
                    const btn = document.createElement('button')
                btn.innerText = choice
                document.body.appendChild(btn)
                })
            })
        })
        document.body.appendChild(p)
    });
})