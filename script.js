const repo = "arghyasikdar/jjimsupload"

async function loadFiles(){

const response = await fetch(
`https://api.github.com/repos/${repo}/contents/materials`
)

const data = await response.json()

const container = document.getElementById("files")

data.forEach(file=>{

const div = document.createElement("div")

div.className="file"

div.innerHTML = `
<span>${file.name}</span>
<a class="download" href="${file.download_url}" target="_blank">Download</a>
`

container.appendChild(div)

})

}

loadFiles()
