import { useEffect, useState } from "react"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "", 
    })
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(): void {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const meme = allMemes[randomNumber]

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: meme['url']
        })) 
    }

    function handleChange(event: any) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

        
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                {meme.randomImage !== "" && <img src={meme.randomImage} className="meme--image" />}
                {meme.randomImage !== "" && <h2 className="meme--text top">{meme.topText}</h2>}
                {meme.randomImage !== "" && <h2 className="meme--text bottom">{meme.bottomText}</h2>}
            </div>
        </main>
    )
}