
let local = localStorage

const getDataClick = () => {
    let inp = document.querySelector('input');
    let text = document.querySelector('textarea');

    if (inp.value !== "" && !inp.value.includes(" ")) {
        let data = {
            name: inp.value,
        }
        local.setItem("user-info", JSON.stringify(data))
        let get_data = local.getItem("user-info")
        get_data = JSON.parse(get_data)
    }else{
        alert('Iltimos bo`sh joyni to`ldiring');
    }

}

let headding = document.querySelector('h1')
headding.innerHTML = JSON.parse(local["user-info"]).name

const removeData = () => {
    // local.clear("user-info")
    local.removeItem("user-info")
}

