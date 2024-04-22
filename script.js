const cakes = document.querySelectorAll(`.cakes`)
const underline = document.querySelector(`#tab-underline`)
const hidealltabs = () => cakes.forEach((cake) => { cake.style.display = `none` })
hidealltabs()
underline.style.display = `none`

const tabs = document.querySelectorAll(`.tab`)

const handlecakes = (t_index) => {
    hidealltabs()
    const c = [...cakes].find(c=>c.id===tabs[t_index].id.replace('tab-', ''))
    c.style.display = 'grid'
    const t = tabs[t_index]
    const r = t.getBoundingClientRect();
    underline.style.display = 'block'
    underline.style.transform = `translateX(${t.offsetLeft}px) scaleX(${r.width/100})`;
}

let interval = null 
const selectTab = (tab) => {
    let t_index = [...tabs].findIndex(t=>t.id==='tab-'+ tab)
    handlecakes(t_index)
    clearInterval(interval)
    interval = setInterval(()=> {
        t_index  = (t_index + 1) %  tabs.length
        handlecakes(t_index)
    }, 5000)
}

setTimeout(()=>selectTab('popular'), 200)

tabs.forEach((tab) => {
    tab.addEventListener('click', () => { selectTab(tab.id.replace('tab-', '')) })

})
