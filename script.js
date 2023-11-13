class Adviser {
	constructor() {
		this.span = document.querySelector("h3 span")
		this.paragraph = document.querySelector(".main p")
		this.button = document.querySelector("#btn")
		this.URL = "https://api.adviceslip.com/advice"
		this.init()
	}
	init() {
		this.loadData()
        this.button.addEventListener('click', this.loadData)
	}
	loadData = async () => {
		try {
			const download = await fetch(this.URL)
			console.log(download.status)//200
			const resp =  await download.json()   
			       
			this.processData(resp)
		} catch (error) {
			console.error(error)
            throw new Error(error)
		}
	}
	processData = (data) => {
        
        this.span.textContent = data.slip.id
        this.paragraph.textContent = data.slip.advice
    }
}
const adviser = new Adviser()

